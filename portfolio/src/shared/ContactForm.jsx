import React, {Component} from 'react'
import '../styles/contactform.css'

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
    
        handleSubmit = e => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: ({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success! Talk soon!"))
            .catch(error => alert(error));
    
          e.preventDefault();
        };
    
        handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
        render() {
          const { name, email, message } = this.state;
          return (
            <>
            <input type="hidden" name="form-name" value="contact" />
            <form netlify-honeypot="bot-field" method="POST" netlify onSubmit={this.handleSubmit}>
              <p>
                <label>
                  Your Name:<input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <label className= "message">
                  Message: <textarea name="message" value={message} onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <button className ="contact-button" type="submit" disabled="disabled">Send</button>
              </p>
            </form>
            </>
            
          )
        }
      }
  export default ContactForm






  
