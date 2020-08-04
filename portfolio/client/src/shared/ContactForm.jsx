import React, {Component} from 'react'
import '../styles/contactform.scss'



const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends Component {
        constructor(props) {
          super(props);
          this.state = { name: "", email: "", message: "" };
        }
    
        handleSubmit = async e => {
          e.preventDefault();
          console.log(this.state)
          fetch('https://mel-portfolio-server.herokuapp.com/', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(this.state)
          })
            .then(() => alert("Success! Talk soon!"))
            .catch(error => alert(error));
    
          
        };
    
        handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
        render() {
          const { name, email, message } = this.state;
          return (
            <>
            <form name="contact"
                  className="contact-form"
                  // method="POST"
                  // data-netlify="true"
                  // netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
              <p>
                <label className="form-title">
                  Your Name:<input className="placeholder" type="text" placeholder="Enter your name" name="name" value={name} onChange={this.handleChange} required/>
                </label>
              </p>
              <p>
                <label className="form-title">
                  Your Email: <input className="placeholder" type="email" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange} required/>
                </label>
              </p>
              <p>
                <label className= "message">
                  Message: <textarea name="message" placeholder="Write message here..." value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p className="cont-button-cont">
                <button className ="contact-button" type="submit">Send</button>
              </p>
            </form>
            </>
          )
        }
      }
  export default ContactForm






  
