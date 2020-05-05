import React, {Component} from 'react'
// import { Button } from 'react-bootstrap/Button'
import '../styles/hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero-hero">
        <div className="name-cont">
          <p className="name-intro">Hello I'm</p><p className="name">Melissa Donegan</p>
        </div>
        <div className='hero'>
          <div className="hero-container">
            <p className="hero-container-text">
              I'm...
          </p>
            <ul className="hero-container-list">
              <li class="hero-container-list-item">a full-stack web developer</li>
              <li class="hero-container-list-item">into making creative solutions</li>
              <li class="hero-container-list-item">excited to hear from you!</li>
            </ul>
          </div>
        </div>
        <div id="tact-button-cont">
          <button id="tact-button"><a className="git-button" href="#Contact">Get In Touch</a></button>
        </div>
      </div>
    )
  }
  
}
export default Hero