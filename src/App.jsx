import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'
import TableDetails from './Components/TableDetails'
import Layout from './Components/Layout'


import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TableDetails from './Components/TableDetails'
const App = () => (
  <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Layout/>}>
      <Route exact path='' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/TableDetails' element={<TableDetails/>} />
      </Route>
      </Routes>
  </BrowserRouter>
);
export default App
