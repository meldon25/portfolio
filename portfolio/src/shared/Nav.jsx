import React from 'react'
import '../styles/nav.css'

function Nav() {
    return (
        <>
        
        <div className='nav'>
        <h1 className="nav-name">M</h1>
            <ul className='nav-list'>
                <li><a href="#Work"><p>1.</p>Work</a></li> 
                <li><a href="#About"><p>2.</p>About</a></li>
                <li><a href="#Contact"><p>3.</p>Contact</a></li>
            </ul>
            <button className="resume-button"><a href="https://drive.google.com/open?id=1Ll-kWTNCWYUqM-cNBL50-qxoF767UEcU">Resume</a></button>
        </div>
        </>
    )
}
export default Nav