import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=' flex p-2 text-xl bg-blue-400 text-white justify-evenly'>
        <div>
            <h1 className='font-poppins'>Am Store</h1>
        </div>
        <div className='flex gap-20 font-poppins'>
            
            <Link to='/'><p>Home</p></Link>
            <Link to='About'><p>About</p></Link>
            <Link to='Contact'><p>Contact</p></Link>
            <Link to='Product'><p>Product</p></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar