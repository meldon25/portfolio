import React from 'react'
import '../styles/hero.css'

function Hero() {
  return (
    <div className="hero-hero">
      {/* <img className="header-img" src="https://i.imgur.com/D714FCg.jpg" /> */}
      <div className="name-cont">
        <p className="name-intro">Hello I'm<p className="name">Melissa Donegan</p></p>
      </div>
      <div className='hero'>
        <div className="hero-container">
          <p className="hero-container-text">
            I'm also...
        </p>
          <ul className="hero-container-list">
            <li class="hero-container-list-item">a full-stack developer</li>
            <li class="hero-container-list-item">a CSS whiz</li>
            <li class="hero-container-list-item">ready for the job!</li>
          </ul>
        </div>
      </div>
      <div className="contact-button-cont">
        <button className="contact-button">Get In Touch</button>
      </div>
    </div>
  )
}
export default Hero