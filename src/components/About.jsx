import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  
  return (
    <div className='flex h-96 mt-2 bg-slate-650'>
      <Outlet/>
      <div className='bg-green w-full,h-full'>

      </div>
    </div>
  )
}

export default About;
