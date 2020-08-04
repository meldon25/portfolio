import React, {Component} from 'react'
import Link, {Route} from 'react'
import ContactForm from './ContactForm'
import '../styles/contact.scss'

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <div className="background">  
<div className="contact-text">
<div className="circle-anim-right"></div>
            <div className="contact-cont">
                <h2 className="contact-title">Get In Touch</h2>
            </div>
            <div className="cont-contain">
            <div className="contact-info">
                {/* <h1 className='contact-git'></h1> */}
                <p className='contact-email'>melissadonegan25@gmail.com</p>
                </div>   
                <div className="circle-anim"></div> 
            <div className="contact-box">
            <input type="hidden" name="form-name" value="contact" />
            <ContactForm />
                </div>
                </div> 
                </div>
                </div>
            </div>
        )

    }
    
}
export default Contact