import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Portfolio from './Components/Portfolio/Portfolio'
import Intro from './Components/Intro/Intro'
import Aboutme from './Components/Aboutme/Aboutme'
import Resume from './Components/Resume/Resume'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <div id="header"><Header/></div>
      <div id='home'><Intro/></div>
      <div id='aboutMe'><Aboutme/></div>
      <div id='resume'><Resume/></div>
      <div id='skills'><Skills/></div>
      <div id='portfolio'><Portfolio/></div>
      <div id='footer'><Footer/></div>
      
    </div>
  )
}

export default App