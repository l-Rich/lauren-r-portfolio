import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


const App = () => {
  return (
    <div>
      <Header/>
        <section>
          <div className="front">
            <h2>Hello! My name is</h2>
            <h1>Lauren L. Richardson. </h1>
            <h2>I am a <span className="words" style={{ color: 'rgb(250, 151, 168)', fontWeight: 'bold' }}>
            <Typewriter
            words={['coder.', 'seeker.', 'student.', 'software engineer.']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
            </span></h2>
          <img className='lauren' src='https://github.com/l-Rich/lauren-r-portfolio/blob/master/public/Untitled%20design%20(2).png?raw=true' />
          </div>
        </section>
    </div>
  )
}

export default App