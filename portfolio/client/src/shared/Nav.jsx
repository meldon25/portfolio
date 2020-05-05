import React from 'react'
import '../styles/nav.css'

function Nav() {
    return (
        <>
            <p className="nav-name">M</p>
        <div className='nav'>
            <ul className='nav-list'> 
                <p>1.</p><li><a className="resume-tab" href="#About">About</a></li>
                <p>2.</p><li><a className="resume-tab" href="#Work">Work</a></li>
                <p>3.</p><li><a className="resume-tab" href="#Contact">Contact</a></li>
            </ul>
            {/* <div className="res-button-cont"> */}
            <button className="resume-button"><a href="https://drive.google.com/open?id=1p0OqF3eqg5XbdPc7YMA51r9NV-CY1MDZ">Resume</a></button>
            </div>
            </>
    )
}
export default Nav