import React from 'react'

const Input = () => {
  return (
    <div>
      <form className='flex justify-between items-center flex-wrap m-4'>
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Id' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Name' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your UserName' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Email' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Street' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Suite' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your City' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Zip Code' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Lat' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Lng' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Phone' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Website' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Company Name' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Comapny catch Phrase' />
      <input type="text" required className='w-[19%] p-2 border my-2' placeholder='Enter your Bs' />
      </form>
    </div>
  )
}

export default Input
