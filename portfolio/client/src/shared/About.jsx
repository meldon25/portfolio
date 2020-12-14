import React from 'react'
import '../styles/about.scss'

function About() {
  return (
    <div id="About">
      <h2 className="about-header">About Me</h2>
      <div className="about-cont">
        <div className="left-side">
          <p className="about-pg">I am a software engineer and designer.
          I am devoted to designing and developing cutting-edge
          websites for companies so they can focus on growing
          their business. </p>
          <p className="about-pg">I really enjoy working with 
          HTML/CSS, JavaScript and React, which combined 
          with my education in art and design has fueled my 
          passion to merge good visual design and technology to bring brands to life
          digitally. I specialize in bridging the
          gap between a company’s ideas and the online
          execution of their brand vision. </p>
          <p className="about-pg">I hold a Bachelor’s degree in Art History, Criticism and Conservation
          from Hunter College. I believe that great design can
          breathe life into a brand and bring businesses much
          closer to their target goals.</p>

        </div>
        <div className="right-side">
          <div className="photo-cont">
            <img className="photo-box" src="https://i.imgur.com/jKaDrJM.jpg" />
          </div>
        </div>
      </div>
      </div>

  )
}
export default About 