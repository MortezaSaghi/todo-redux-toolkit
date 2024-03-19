import { useDispatch } from "react-redux";
import { deleteAsyncTodo, toggleAsyncTodo } from "../features/Todos/TodosSlice";

export default function TodoItem({ id, title, completed  }) {
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
