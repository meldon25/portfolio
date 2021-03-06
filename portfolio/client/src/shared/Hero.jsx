import React, { Component } from 'react'
// import { Button } from 'react-bootstrap/Button'
import '../styles/hero.scss'

class Hero extends Component {
  render() {
    return (
      <div className="hero-cont">
        <div className="fullscreen-bg">
    <video className="fullscreen-bg_video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://i.imgur.com/oHux9Z2.mp4" type="video/mp4" />
  </video>
    </div>
    <img className="mobile-photo" src="https://i.imgur.com/K7f6QLP.jpg"/>
      <div className="container">
        <h1 className="name-title">Melissa Donegan</h1>
        <p className="hero-desc">Software Engineer + Designer</p>
      </div>
      <div className="arrow-cont">
    <div className="arrow"></div>
    </div>
    </div>
    // </div>
  
      
    )
  }

}
export default Hero