import React  from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Home from '../../screens/Home'
import About from '../../screens/About'
import Contact from '../../screens/Contact'
import Product from '../../screens/Product'

function Routers() {
    return (
      <>
     
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Product' element={<Product/>} />
      </Routes>
      </BrowserRouter>

      </>
    )
  }
  
  export default Routers