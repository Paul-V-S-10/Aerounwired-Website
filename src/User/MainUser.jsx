import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage/HomePage'
import HeroSection from './Components/HeroSection/HeroSection'

const MainUser = () => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet/> */}
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default MainUser