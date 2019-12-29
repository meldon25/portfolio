import React from 'react'
import '../styles/about.css'

function About() {
    return (
        <div className='about-container'>
            <div className="left-side">
            <h1 className='about-tab'>2. About</h1>
            <p className='about-desc'>I am a full-stack developer based in New York City. I have a background in Art History and high-volume sales management. My creative background combined with my passion for problem-solving and detail-oriented work has given me a solid foundation in web development. I value strong communication in collaborative environments, which can lead to meaningful results. </p>
            <p className="skill-bar">Technologies I have recently worked with:</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li><div className="arrow"></div>HTML & CSS</li>
                   <li><div className="arrow"></div>React</li>
                   <li><div className="arrow"></div>JavaScript</li>
                   <li><div className="arrow"></div>Node.js</li>
               </ul>
               <ul className='right-skills'>
                   <li><div className="arrow"></div>Express</li>
                   <li><div className="arrow"></div>Postgres & SQL</li>
                   <li><div className="arrow"></div>Ruby</li>
                   <li><div className="arrow"></div>Ruby on Rails</li>
               </ul>
            </div>
            </div>
            <div className="right-side">
            <div className="photo-box">
                <div className='box'></div>
            <img src="https://i.imgur.com/SkChz9M.jpg" />
            </div>
            </div>

        </div>
        
    )
}
export default About 