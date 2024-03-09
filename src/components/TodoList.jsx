import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo, ToggleTodo } from "../features/Todos/TodosSlice";

// const todos = [
//   { id: 1, title: "todo one", completed: false },
//   { id: 2, title: "todo two", completed: false },
//   { id: 3, title: "todo three", completed: true },
// ];
export default function TodoList() {
  const {todos} = useSelector(state=>state.todos)
  return (
    <div className="">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

function Todo({ id, title, completed }) {
  const dispatch = useDispatch();
  return (
    <div className={`flex justify-around border-2 mb-2 rounded-md py-4 px-2 md:max-w-2xl mx-auto ${completed?"bg-slate-400":""}`}>
      <div>
        <input className="mx-4" type="checkbox" name="" id={id} checked={completed} onChange={()=>{dispatch(ToggleTodo({id,completed}))}} />
        <span className="text-slate-100">{title}</span>
      </div>
      <button className="bg-rose-400 text-slate-100 py-1 px-2 rounded-md hover:bg-rose-500 hover:shadow-md" onClick={()=>dispatch(DeleteTodo({id}))}>Delete</button>
    </div>
  );
}
