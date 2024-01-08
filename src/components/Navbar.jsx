import { useState } from 'react'
// import Flag from './src/assets/dubaiflag.png'


function Navbar() {
  return (
    <>
     <div className=" nav-bg flex bg-[#ffed14]">
        <div class="mt-4">
            <h1 className='ml-[20px]'>E_STORE</h1>
        </div>
        <div className="flex">
            {/* <img className="mt-4 w-9 h-6 ml-9 rounded" src={Flag} alt=""/> */}
            <h1 className="mt-4 w-9 h-6 ml-9 rounded">dubai</h1>
            <p className="mt-2 ml-3 text-[15px]">Deliver to <br /> <b>DUBAI</b></p>
            <p className="ml-3 mt-3">+</p>
        </div>
        <div>
            <ul className="flex ">
                <li className="mt-4">
                    <form>
                        <input className="rounded ml-1 h-9 w-[770px]" placeholder=" What are you looking for?"
                            type="search"/>
                    </form>
                </li>
                <li className=" ml-7 mt-4">
                    العربية
                </li>
                <li className=" mt-4">
                    <span className="ml-5">|</span> <span className="ml-3">Sign In</span> <i class="fa-regular fa-user"></i>
                </li>
                <li class=" mt-4">
                    <span class="ml-3">|</span> <span class="ml-2">Cart</span> <i class="fa-solid fa-cart-shopping"></i>
                </li>
            </ul>
        </div>
      </div>
    </>
  )
};

export default Navbar
