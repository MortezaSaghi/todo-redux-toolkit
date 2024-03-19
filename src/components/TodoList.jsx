import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../features/Todos/TodosSlice";
import { useEffect } from "react";
import Loading from "./Loading";
import ErrorPanel from "./ErrorPanel";
import Empty from "./Empty";
import TodoItem from "./TodoItem";


export default function TodoList() {
  const {todos,loading,error} = useSelector(state=>state.todos)
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(getAsyncTodos())
  },[])
  if (error) return <ErrorPanel error={error}/>
  if (!todos.length) return <Empty/>
  if (loading) return <Loading/>
  return (
    <div className="">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo}  />
      ))}
    </div>
  );
}

