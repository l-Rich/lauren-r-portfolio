import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src='' alt='' />
                </div>
                <div className='navlink'>
                    <ul className='link f_flex uppercase'>
                        <li> <a href="#home">home</a></li>
                        <li> <a href="#aboutme">About Me</a></li>
                        <li> <a href="#portfolio">Resume</a></li>
                        <li> <a href="#resume">Portfolio</a></li>
                        <li> <a href="#blog">Github</a></li>
                        <li> <a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </header>
        
    </>
  )
}

export default Header