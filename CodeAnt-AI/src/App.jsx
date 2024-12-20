import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/login'
import Login2 from './Pages/Login2'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Login2' element={<Login2/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
