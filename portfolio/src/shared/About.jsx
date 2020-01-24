import React from 'react'
import '../styles/about.css'

function About() {
    return (
        <div id="About">
            <h1 className='about-tab'>2. About<div className="line-2"></div></h1>
        <div className='about-container'>
            <div className="left-side">
            <p className='about-desc'><h2>What I Do</h2>I am a driven and creative problem-solver with an eye for design and a commitment to putting the client’s needs first. I grow best when I am constantly challenged to learn new things and I hold myself accountable to staying ahead of the curve. I take pride in building projects collaboratively through strong communication and through targeted goal setting.</p>
            {/* <p className="skill-bar">Languages & Frameworks I work with:</p> 
            <div className='skills'>
               <ul className='left-skills'>
                   <li><div className="arrow"></div>HTML5</li>
                   <li><div className="arrow"></div>CSS/Sass</li> 
                   <li><div className="arrow"></div>JavaScript</li>
                   <li><div className="arrow"></div>React</li>
                   <li><div className="arrow"></div>Node.js</li>
                   <li><div className="arrow"></div>Express</li>
               </ul>
               <ul className='right-skills'>
                    <li><div className="arrow"></div>Flexbox</li>
                    <li><div className="arrow"></div>Responsive Design</li>
                    <li><div className="arrow"></div>Figma</li>
                   <li><div className="arrow"></div>PostgreSQL & SQL</li>
                   <li><div className="arrow"></div>Ruby</li>
                   <li><div className="arrow"></div>Ruby on Rails</li>
               </ul>
            </div> */}
            </div>
            <div className="right-side">
            <div className='box'></div>
            <div className="photo-box">
            <img className="photo-box2" src="https://i.imgur.com/QVCDuvl.jpg" />
            </div>
            </div>
        </div>
        </div>
        
    )
}
export default About 