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
      <div className="portfolio_card">
        <img className="portfolio_image"src="https://github.com/l-Rich/project1-2048/blob/main/WholeBackground.png?raw=true" />
        <div className="container">
        <h4><a href="http://coding-pal.herokuapp.com/"><b>Coding Pals!</b></a></h4>
        <p>A showcase for your friends and their pets! This was made with Javscript, Express, MongoDB, Canva and Bootstrap.</p>
        </div>
      </div>
      <div className="portfolio_card">
        <img className="portfolio_image"src="https://github.com/l-Rich/bon-voyage/blob/main/src/image/Untitled%20design%20(2).png?raw=true" />
        <div className="container">
        <h4><a href="http://bon-voyage-weather.herokuapp.com/"><b>Bon Voyage!</b></a></h4>
        <p> Planning a trip? This web app is a wway to check the current weather and forecast of a given city. This was made with React and a Weather API</p>
        </div>
      </div>
      <div className="portfolio_card">
        <img className="portfolio_image"src="https://github.com/l-Rich/tabbed/blob/master/tabbed_logo.png?raw=true" />
        <div className="container">
        <h4><a href="http://tabbed.herokuapp.com/"><b>TABBED</b></a></h4>
        <p>Group travel! A way to calculate all the expenses of a group trip. Python, Bootstarp, Netlify, Canva. </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio