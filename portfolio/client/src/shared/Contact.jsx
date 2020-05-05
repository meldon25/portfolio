import React, {Component} from 'react'
import Link, {Route} from 'react'
import ContactForm from './ContactForm'
import '../styles/contact.css'

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
            <div className="contact-cont">
                <h2 className="contact-title"><p className="contnum">3.</p>Contact<div className="line-3"></div></h2>
            </div>
            <div className="cont-contain">
            <div className="contact-info">
                <h1 className='contact-git'>Get In Touch</h1>
                <p className='contact-email'>melissadonegan25@gmail.com</p>
                <p className="contact-desc">I am currently looking for new opportunities! <br /> If you are interested in working together or just want to say hello, send me a message and I will get to your email right away!</p>  
                </div>
            <div className="contact-box">
            <input type="hidden" name="form-name" value="contact" />
                <ContactForm />
                </div>
                </div>
            </div>
        )

    }
    
}
export default Contact