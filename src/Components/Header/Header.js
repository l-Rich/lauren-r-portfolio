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
                        <li> <a href="#portfolio">portfolio</a></li>
                        <li> <a href="#github">github</a></li>
                        <li> <a href="#resume">resume</a></li>
                        <li> <a href="#blog">blog</a></li>
                        <li> <a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
        
    </>
  )
}

export default Header