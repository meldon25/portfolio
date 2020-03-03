import React from 'react'
// import {Link} from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
    return (
        <>
        <div className='nav'>
        <h1 className="nav-name">M</h1>
            <ul className='nav-list'> 
                <p>1.</p><li><a className="resume-tab" href="#About">About</a></li>
                <p>2.</p><li><a className="resume-tab" href="#Work">Work</a></li>
                <p>3.</p><li><a className="resume-tab" href="#Contact">Contact</a></li>
            </ul>
            <div className="res-button-cont">
            <button className="resume-button"><a href="https://drive.google.com/open?id=1Ll-kWTNCWYUqM-cNBL50-qxoF767UEcU">Resume</a></button>
            </div>
            </div>
        </>
    )
}
export default Nav