import React from 'react'

export default function AddTodo() {
  return (
    <div className='border-2 rounded-md p-2 mt-2 flex justify-center gap-4'>
        <input className='rounded-md bg-slate-500 border-2 ps-2 text-slate-300' type="text" placeholder='Enter New Todo ...' />
        <button className='bg-blue-950 text-slate-300 py-1 px-4 rounded-md'>Add</button>
    </div>
  )
}
