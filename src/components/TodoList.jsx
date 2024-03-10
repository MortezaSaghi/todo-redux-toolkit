import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, ToggleTodo, deleteAsyncTodo, getAsyncTodos, toggleAsyncTodo } from "../features/Todos/TodosSlice";
import { useEffect } from "react";
import Loading from "./Loading";
import ErrorPanel from "./ErrorPanel";

// const todos = [
//   { id: 1, title: "todo one", completed: false },
//   { id: 2, title: "todo two", completed: false },
//   { id: 3, title: "todo three", completed: true },
// ];
export default function TodoList() {
  const {todos,loading,error} = useSelector(state=>state.todos)
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getAsyncTodos())
  },[])
  if (loading) return <Loading/>
  if (error) return <ErrorPanel error={error}/>
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo}  />
      ))}
    </div>
  );
}


function Todo({ id, title, completed  }) {
  const dispatch = useDispatch();
  return (
    <div className={`flex justify-around border-2 mb-2 rounded-md py-4 px-2 md:max-w-2xl mx-auto ${completed?"bg-slate-400":""}`}>
      <div>
        <input className="mx-4" type="checkbox" name="" id={id} checked={completed} onChange={()=>{dispatch(toggleAsyncTodo({id,completed}))}} />
        <span className="text-slate-100">{title}</span>
      </div>
      <button className="bg-rose-400 text-slate-100 py-1 px-2 rounded-md hover:bg-rose-500 hover:shadow-md" onClick={() => dispatch(deleteAsyncTodo({ id }))}>Delete</button>
    </div>
  );
}
