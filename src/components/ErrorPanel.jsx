import React from 'react'

export default function ErrorPanel({error}) {
  return (
    <div className='flex justify-around border-2 mb-2 rounded-md py-4 px-2 md:max-w-2xl mx-auto'>{error}</div>
  )
}
