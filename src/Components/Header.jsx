import React from 'react'
import { Link } from 'react-router-dom'
import Developer from './Developer'

function Header() {
  return (
    <header className='bg-white inline-flex border-spacing-6 space-x-10'>
      <div className='py-1 px-10 space-x-10 border-4 border-blue-700 mx-2 my-1 bg-red-300'><Link to="/home">Home</Link></div>
      <div className='py-1 px-10 space-x-10 border-4 border-blue-700 mx-2 my-1 bg-red-300'><Link to="/">Price List</Link></div>
      <div className='py-1 px-10 space-x-10 border-4 border-blue-700 mx-2 my-1 bg-red-300'><a href="https://flowcv.me/pranavcoolkarni">About Developer</a></div> 
    </header>
  )
}

export default Header
