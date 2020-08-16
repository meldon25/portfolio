import React, { Component } from 'react'
// import { Button } from 'react-bootstrap/Button'
import '../styles/hero.scss'

class Hero extends Component {
  render() {
    return (
      <div className="hero-cont">
        <div className="fullscreen-bg">
    <video loop muted autoPlay className="fullscreen-bg_video">
        <source autoPlay loop src="https://i.imgur.com/EuPkc7A.mp4" type="video/mp4" />
    </video>
</div>
<img className="mobile-photo" src="https://i.imgur.com/BbAN5hx.jpg?1"/>
      <div className="container">
        <h1 className="name-title">Melissa Donegan</h1>
        <p className="hero-desc">Designer and Software Engineer</p>
      </div>
      {/* <div className="tact-button-cont">
      <button id="tact-button"><a className="button-text" href="#Contact">Get In Touch</a></button>
    </div> */}
    <div className="arrow"></div>
    </div>
    
      
    )
  }

}
export default Hero