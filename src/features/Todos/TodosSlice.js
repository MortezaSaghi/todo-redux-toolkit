import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
  error: "",
};
const api = axios.create({
  baseURL: "http://localhost:5001",
});

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addAsyncTodo = createAsyncThunk(
  "todos/addAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/todos", {
        id: String(Date.now()),
        title: payload.title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await api.delete(`/todos/${payload.id}`);
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleAsyncTodo = createAsyncThunk(
  "todos/toggleAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/todos/${payload.id}`, {
        completed: !payload.completed,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  // reducers: {
  //   AddTodo: (state, action) => {
  //     const newTodo = {
  //       id: Date.now(),
  //       title: action.payload.title,
  //       completed: false,
  //     };
  //     state.todos.push(newTodo);
  //   },
  //   ToggleTodo: (state, action) => {
  //     const selectedTodo = state.todos.find(
  //       (todo) => todo.id === action.payload.id
  //     );
  //     selectedTodo.completed = !action.payload.completed;
  //   },
  //   DeleteTodo: (state, action) => {
  //     state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state) => {
        state.loading = true;
        state.todos = [];
        state.error = "";
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = "";
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addAsyncTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(addAsyncTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAsyncTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id
          );
        })
        .addCase(toggleAsyncTodo.fulfilled, (state, action) => {
          state.loading = false;
          const selectedTodo = state.todos.find(
            (todo) => todo.id === action.payload.id
            );
        selectedTodo.completed = action.payload.completed;
      });
  },
});

// export const { AddTodo, ToggleTodo, DeleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
