import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Router, Routes } from 'react-router-dom'
import { useAuth } from '../store/auth'
import Home from '../components/Home'
import Login from '../components/Login'
import Singup from "../components/Singup"
import Navbar from '../components/Navbar'
import Summarize from '../components/Summarize'
import { Toaster } from 'react-hot-toast'

function App() {
 const {authUser,Token}=useAuth();

  return (
    <>
    {/* Todo -loader */}
   <div className=' h-[100vh] overflow-y-auto '>
   
    <Navbar/>
    <div className=' sm:pt-10 md:pt-1 '>
    
     <Routes>
       <Route path="/" element={authUser ? (<Home/>):(<Login/>)} />  
       <Route path="/Login" element={<Login/>}/>
       <Route path="/signup"  element={<Singup/>}/>
       <Route path="/summarize/:new_url/:img_url/:heading"  element={<Summarize/>} />
     </Routes>
     </div>
     <Toaster />  <Toaster/>
     </div>
    </>
  )
}

export default App
