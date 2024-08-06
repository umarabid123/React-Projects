import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-700 h-20 text-4xl font-semibold text-center text-white p-2'>
      User :{userid}
    </div>
  )
}

export default User
