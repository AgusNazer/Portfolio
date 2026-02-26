// import { useState } from 'react'

import  Navbar from './components/navbar/Navbar'
import  Home from './views/home/Home'
import  About from './views/about/About'
import  TechSkills from './views/techs/TechSkills'
import Proyects from './views/projects/Projects'
import Footer from './components/footer/Footer'
import './App.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom'



function App() {
 const location =useLocation();


 

 useEffect(() => {
  // Si la ubicación tiene un hash, intenta hacer scroll suave hacia esa ancla
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}, [location]);

  return (

      <div className="min-h-screen">
       <Navbar/>
       {/* <Home/> */}
       
      
       <Routes>
      
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/proyects" element={ <Proyects /> } />
        <Route path="/techs" element={ <TechSkills /> } />
        <Route path="/contact" element={ <Footer /> } />
      </Routes>
       {/* <Footer/> */}
      </div>
     
 
  )
}

export default App
