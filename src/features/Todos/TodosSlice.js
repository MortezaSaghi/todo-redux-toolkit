import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const TodoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
            const newTodo = {
                id:Date.now(),
                title:action.payload.title,
                completed:false,
            }
            state.todos.push(newTodo)
        },
        ToggleTodo:(state,action)=>{
           const selectedTodo = state.todos.find(todo=>todo.id === action.payload.id);
           selectedTodo.completed = !action.payload.completed;
        },
        DeleteTodo:(state,action)=>{
            state.todos= state.todos.filter(todo=>todo.id!==action.payload.id)
        }
    }
})

export const {AddTodo,ToggleTodo,DeleteTodo} =TodoSlice.actions;
export default TodoSlice.reducer;