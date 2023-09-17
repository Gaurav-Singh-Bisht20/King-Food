import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className=' flex  h-96 mt-2   bg-slate-200'>
      <div></div>
      <Outlet/>
    </div>
  )
}

export default About;