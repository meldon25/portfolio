import React from 'react'
import '../styles/about.scss'

function About() {
  return (
    <div id="About">
      <h2 className="about-header">About Me</h2>
      <div className="about-cont">
        <div className="left-side">
          <p className="about-pg">I am a designer and software engineer.
          I am devoted to designing and developing cutting-edge
          websites for companies so they can focus on growing
            their business. </p>
          <p className="about-pg">After a career in fashion retail, in which I dove head-first
          into the business of styling and design and worked with
          brands such as Aritzia and Michael Kors, I realized that
          my lifelong passion for art and technology gave me a
          unique perspective on how to bring brands to life
          digitally. Ever since, I have specialized in bridging the
          gap between a company’s ideas and the online
          execution of their brand vision. </p>
          <p className="about-pg">I hold a Bachelor’s degree in Art History and Studio Arts
          from Hunter College. I believe that great design can
          breathe life into a brand and bring businesses much
          closer to their target audience and goal.</p>

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