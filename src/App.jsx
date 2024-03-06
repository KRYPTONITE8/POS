import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
      {/* <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes> */}
      <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />


      </Routes>
  </BrowserRouter>
);
export default App
