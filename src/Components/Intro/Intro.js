import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import './Intro.css'

const Intro = () => {
  return (
    <div> 
        <section className='intro'>
          <div className='intro_content'>
            <h2>Hello! My name is</h2>
            <h1 className='intro_name'>Lauren L. Richardson. </h1>
            <h2>I am a <span className="words" style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
            <Typewriter
            words={['coder.', 'adventure seeker.', 'student.', 'software engineer.']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            /></span></h2>
            <div className='l_border'>
                <img className='lauren' src='https://github.com/l-Rich/lauren-r-portfolio/blob/master/public/Untitled%20design%20(2).png?raw=true' />
            </div>
            </div>
        </section>
    </div>
  )
}

export default Intro