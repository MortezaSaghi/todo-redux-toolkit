import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddTodo } from '../features/Todos/TodosSlice';

export default function AddTodoForm() {
  const [title,setTitle] = useState("");
  const dispatch = useDispatch();
  const addHandler =(e)=>{
    e.preventDefault();
    if (!title) return;
    dispatch(AddTodo({title:title}));
    setTitle("");
  }
  return (
    <form className='border-2 rounded-md p-2 mt-2 flex justify-center gap-4' onSubmit={addHandler}>
        <input className='rounded-md bg-slate-500 border-2 ps-2 text-slate-300' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter New Todo ...' />
        <button className='bg-blue-700 text-slate-300 py-1 px-4 rounded-md border border-blue-700 hover:border-slate-300 transition ease-in-out'>Add</button>
    </form>
  )
}
