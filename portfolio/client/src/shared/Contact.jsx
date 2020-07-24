import React, {Component} from 'react'
import Link, {Route} from 'react'
import ContactForm from './ContactForm'
import '../styles/contact.scss'

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <div className="fullscreen-bg">
    <video loop muted autoPlay className="fullscreen-bg_video">
        <source autoPlay loop src="https://i.imgur.com/ZlqeaEO.mp4" type="video/mp4" />
    </video>
</div>
<div className="contact-text">
            <div className="contact-cont">
                <h2 className="contact-title">Contact</h2>
            </div>
            <div className="cont-contain">
            <div className="contact-info">
                <h1 className='contact-git'>Get In Touch</h1>
                <p className='contact-email'>melissadonegan25@gmail.com</p>
                <p className="contact-desc">I'm currently looking for new opportunities! <br /> If you're interested in working together or just want to say hello, send me a message and I will get to your email ASAP!</p>  
                </div>
            {/* <div className="contact-box"> */}
            {/* <input type="hidden" name="form-name" value="contact" /> */}
                {/* <ContactForm /> */}
                {/* </div> */}
                </div>
                </div>
            </div>
        )

    }
    
}
export default Contact