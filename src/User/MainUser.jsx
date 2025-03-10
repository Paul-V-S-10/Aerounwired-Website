import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Gallery from './Components/Gallery/Gallery'
import { Outlet } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import HeroSection from './Components/HeroSection/HeroSection'
import TeamPage from './Pages/Team/TeamPage'
import EventsPage from './Pages/EventsPage/EventsPage'


const MainUser = () => {
  return (
    <div>
      <Navbar/>
      {/* <Outlet/> */}
      {/* <HeroSection/> */}
      {/* <TeamPage/> */}
      <EventsPage/>
    </div>
  )
}

export default MainUser