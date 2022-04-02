import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Portfolio from './Components/Portfolio/Portfolio'
import Intro from './Components/Intro/Intro'
import Aboutme from './Components/Aboutme/Aboutme'


const App = () => {
  return (
    <div>
      <Header/>
      <Intro/>
      <Aboutme/>
      <Portfolio/>
    </div>
  )
}

export default App