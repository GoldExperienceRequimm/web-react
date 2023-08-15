import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimage2 from '../Components/Heroimage2'
import Pricing from "../Components/pricing"


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="Projects" text="Some of my best work" />
      
      <Pricing />
      <Footer/ > 
    </div>
  )
}

export default Project
