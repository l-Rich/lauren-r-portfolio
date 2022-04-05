import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Portfolio from './Components/Portfolio/Portfolio'
import Intro from './Components/Intro/Intro'
import Aboutme from './Components/Aboutme/Aboutme'
import Resume from './Components/Resume/Resume'


const App = () => {
  return (
    <div>
      <Header/>
      <div className='intro'><Intro/></div>
      <div className='aboutMe'><Aboutme/></div>
      <Resume/>
      <Portfolio/>
    </div>
  )
}

export default App