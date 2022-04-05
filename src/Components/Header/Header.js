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
                        <li> <a href="#aboutMe">About Me</a></li>
                        <li> <a href="#resume">Resume</a></li>
                        <li> <a href="#portfolio">Portfolio</a></li>
                        <li> <a href="www.github.com/l-rich">Github</a></li>
                        <li> <a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </header>
        
    </>
  )
}

export default Header