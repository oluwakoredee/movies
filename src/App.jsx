/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index path= '/' element = {<Home/>}/>,
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
