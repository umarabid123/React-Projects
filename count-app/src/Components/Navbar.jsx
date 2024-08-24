import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-700 text-white py-2 px-4 text-xl flex items-center justify-center gap-10'>
      <ul>
       <Link to ='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/Contact'><li>Contact</li></Link>
        <Link to='/Login'><li>Login</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
