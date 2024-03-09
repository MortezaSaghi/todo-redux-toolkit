import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./Todos/TodosSlice";

const Store = configureStore({
    reducer:{
        todos:TodosReducer,
    }
})

export default Store;