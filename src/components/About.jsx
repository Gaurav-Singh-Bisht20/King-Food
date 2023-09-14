import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className=' flex  h-96 mt-2   bg-orange-100'>
      <h1>hi</h1>
      <Outlet/>
    </div>
  )
}

export default About;