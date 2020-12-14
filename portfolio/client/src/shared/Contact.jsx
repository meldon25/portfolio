import React, {Component} from 'react'
import Link, {Route} from 'react'
import Fade from 'react-reveal/Fade';
import ContactForm from './ContactForm'
import '../styles/contact.scss'

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <div className="background">  
<div className="contact-text">
    <Fade right>
<div className="circle-anim-right"></div>
</Fade>

            <div className="contact-cont">
                <h2 className="contact-title">Get In Touch</h2>
                <p className='contact-email'>melissadonegan25@gmail.com</p>
                <button className="resume-button"><a className="resume-link" href="https://drive.google.com/file/d/1Bw1dOn66QGcj4dLepDiDYY0lmKoQsuc5/view?usp=sharing">Resume</a></button>
            </div>
            <div className="cont-contain">  
                <Fade left>
                <div className="circle-anim">
                </div>
                </Fade>
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