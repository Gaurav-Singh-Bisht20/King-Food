import React from 'react'
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <h1 className='flex-grow' >good evening</h1>
      <Outlet/>
    </div>
  )
}

export default About;