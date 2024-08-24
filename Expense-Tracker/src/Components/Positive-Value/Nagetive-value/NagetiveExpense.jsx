import React from 'react'

function NagetiveExpense({nagAmount, nagTxt}) {
  return (
    <div className='nagetive-expense cursor-pointer'>

    <div className='bg-white w-full border-r-4 border-[#2da3ad] flex justify-between items-center p-2 mt-4 hover:bg-[#2da3ad] hover:text-white transition-all duration-700'>
    <p className='text-lg'>{nagTxt}</p>
    <p className='text-lg'>${nagAmount}</p>

    </div>
    </div>
  )
}

export default NagetiveExpense

function notify(){
  if(inputAmount>0){
    toast.success('Income Successfully Add!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  else{
    
      toast.success('Expense successfully Deducted From Income!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }
}