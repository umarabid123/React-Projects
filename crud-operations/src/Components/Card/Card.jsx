import React from 'react'

const Card = ({item, handleDelete}) => {
  return (
    <div className='bg-gray-300 p-4 rounded-lg w-[30%] my-4'>
      <div className="text">
        <p className='text-xl py-2 text-black'><strong className='text-green-600 px-2'>Id:</strong>{item.id}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Name:</strong>{item.name}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>UserName:</strong>{item.username}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Email:</strong>{item.email}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Street:</strong>{item.address.street}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Suite:</strong>{item.address.suite}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>City:</strong>{item.address.city}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Zip Code:</strong>{item.address.zipcode}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Lat:</strong>{item.address.geo.lat}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Lng:</strong>{item.address.geo.lng}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Phone:</strong>{item.phone}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Website:</strong>{item.website}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Company Name:</strong>{item.company.name}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Company catch Phrase:</strong>{item.company.catchPhrase}</p>
        <p className='text-xl py-2'><strong className='text-green-600 px-2'>Comapny BS:</strong>{item.company.bs}</p>
        <button className='bg-red-700 text-white font-semibold text-xl py-2 px-4 rounded-lg mx-2' onClick={() => handleDelete(item.id)}>Delete</button>
        <button className='bg-sky-700 text-white font-semibold text-xl py-2 px-4 rounded-lg '>Edit</button>

      </div>
    </div>
  )
}

export default Card
