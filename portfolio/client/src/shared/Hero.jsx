import React, { Component } from 'react'
// import { Button } from 'react-bootstrap/Button'
import '../styles/hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero-cont">
      <div class="container">
        <span class="text1">Melissa Donegan</span>
        <span class="text2">
          Software Developer
    </span>
      </div>
      <div className="tact-button-cont">
      <button id="tact-button"><a className="button-text" href="#Contact">Get In Touch</a></button>
    </div>
    </div>
      
    )
  }

}
export default Hero