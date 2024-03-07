import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <div className='bg-cyan-300 flex-grow object-fill'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    
    </>
  )
}

export default Layout