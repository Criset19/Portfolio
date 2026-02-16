//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <>
      
      <div className='navbar'>
        <Navbar />
      </div>

      <main className='body'>
        <div id='about' className='section pad about_section'>
          <h1 className='title'>About Me</h1> 
          <About/> 
        </div>

        <div id='proj' className='pad'>
          <h1 className='title' >My Projects</h1>
          <Projects/>
        </div>

        {/* <div id='future' className='section pad'>
          <h1 className='title'>Future Projects</h1> 
          <Future/>
        </div> */}

        <div id='cont' className='section pad'>
          <h1 className='title'>Contact Me</h1> 
          <Contact/>
        </div>
      </main>

      
    </>
  )
}

export default App
