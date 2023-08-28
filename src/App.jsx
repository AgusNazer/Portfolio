// import { useState } from 'react'

import  Navbar from './components/navbar/Navbar'
import  Home from './views/home/Home'
import  About from './views/about/About'
import  TechSkills from './views/techs/TechSkills'
import Proyects from './views/projects/Projects'
import Footer from './components/footer/Footer'
import ContactMe from './views/contact/ContactMe'
import './App.css'


import { Routes ,Route } from 'react-router-dom'

function App() {


  return (

      <div>
       <Navbar/>
       {/* <Home/> */}
       <br />
       <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/Techs" element={ <TechSkills /> } />
        <Route path="/proyects" element={ <Proyects /> } />
        <Route path="/contact" element={ <ContactMe /> } />
      </Routes>
       {/* <Footer/> */}
      </div>
     
 
  )
}

export default App
