import React, {Component} from 'react'
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
              I'm also...
          </p>
            <ul className="hero-container-list">
              <li class="hero-container-list-item">a full-stack developer</li>
              <li class="hero-container-list-item">a CSS whiz</li>
              <li class="hero-container-list-item">ready for the job!</li>
            </ul>
          </div>
        </div>
        <div className="tact-button-cont">
          <button className="tact-button"><a className="git-button" href="#Contact">Get In Touch</a></button>
        </div>
      </div>
    )
  }
  
}
export default Hero