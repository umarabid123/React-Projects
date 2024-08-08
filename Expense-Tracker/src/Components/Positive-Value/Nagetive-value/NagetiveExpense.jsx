import React from 'react'

function NagetiveExpense() {
  return (
    <div className='nagetive-expense cursor-pointer'>

    <div className='bg-white w-full border-r-4 border-[#2da3ad] flex justify-between items-center p-2 mt-4 hover:bg-[#2da3ad] hover:text-white transition-all duration-700'>
    <p className='text-lg'>Bill</p>
    <p className='text-lg'>-$5000.00</p>

    </div>
    </div>
  )
}

export default NagetiveExpense
