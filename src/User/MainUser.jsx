import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Gallery from './Components/Gallery/Gallery'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const MainUser = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default MainUser