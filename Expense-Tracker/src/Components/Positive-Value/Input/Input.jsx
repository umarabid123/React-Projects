import React from 'react'

function Input({placeholder, text,type}) {
  return (
    <div className='Input mt-6'>
      <label className='font-bold text-md'>{text}</label>
      <input type={type} placeholder={placeholder}  className='w-full border-[1px] border-gray-300 p-2 mt-1 rounded-sm outline-black'/>
    </div>
  )
}

export default Input
