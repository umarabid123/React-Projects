import React from 'react'

function PoitiveExpense({txt,Amount}) {
  return (
    <div className='bg-white w-full border-r-4 border-[#b6960a] flex justify-between items-center p-2 mt-4 hover:bg-[#b6960a] hover:text-white transition-all duration-700 cursor-pointer'>
    <p className='text-lg'>{txt}</p>
    <p className='text-lg'>${Amount}.00</p>
     </div>
  )
}

export default PoitiveExpense
