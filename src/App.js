import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


const App = () => {
  return (
    <div>
      <Header/>
        <section>
          <h1>Hello! My name is <span>Lauren L. Richardson. </span> I am a... </h1>           
          <h1><span style={{ color: 'rgb(250, 151, 168)', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['coder.', 'seeker', 'student.', 'software engineer.']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
          

          <img className='lauren' src='https://github.com/l-Rich/lauren-r-portfolio/blob/master/public/Untitled%20design%20(2).png?raw=true' />
        </section>
    </div>
  )
}

export default App