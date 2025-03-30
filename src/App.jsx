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
     <footer className="bg-base-100 border-t border-base-300 mt-auto text-center py-4">
        <p className="text-sm md:text-base">© Deepank Singh 2025 | <a href="mailto:deepanksingh01@gmail.com"  className="text-primary hover:underline">deepanksingh01@gmail.com</a> | <a href="https://www.linkedin.com/in/deepanksingh/" target="_blank" className="text-primary hover:underline">Contact Developer</a> | <a href="https://deepank-protfolio.vercel.app/"  target="_blank" className="text-primary hover:underline">Portfolio</a></p>
      </footer>

     </div>
    </>
  )
}

export default App
