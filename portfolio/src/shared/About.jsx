import React from 'react'
import '../styles/about.css'

function About() {
    return (
        <div id="About">
            <div className="about-cont">
            <h1 className='about-tab'><p className="contnum">2.</p>About<div className="line-2"></div></h1>
            <div className='about-container'>
                <div className="left-side">
                    <p className='about-desc'><h2>What I Do</h2>I am a driven and creative problem-solver with an eye for design and a commitment to putting the client’s needs first. I grow best when I am constantly challenged to learn new things and I hold myself accountable to staying ahead of the curve. I take pride in building projects collaboratively through strong communication and through targeted goal setting.</p>

                </div>
                <div className="right-side">
                    <div className='box'></div>
                    <div className="photo-box">
                        <img className="photo-box2" src="https://i.imgur.com/QVCDuvl.jpg" />
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default About 