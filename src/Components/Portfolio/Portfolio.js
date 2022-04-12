import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio_card">
        <img className="portfolio_image"src="http://gabrielecirulli.github.io/2048/meta/og_image.png" />
        <div className="container">
        <h4><b>2048</b></h4>
        <p>My first project, The game 2048. This was made with Javscript, Express, node, and some fun custom CSS.</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio