import React from 'react'
import '../styles/hero.css'

function Hero() {
    return (
        <div className ='hero'>
        <h3 className='hero-title'>Hi, my name is</h3>
        <h1 className='hero-name'>Melissa Donegan.</h1>
        <h1 className='hero-intro'>I build things for the web.</h1>
        <p className='description-hero'>I am a NYC-based software engineer specializing in building and designing exceptional and efficient websites. </p>
        <button className="contact-button">Get In Touch</button> 
        </div>
    )
}
export default Hero