import React from 'react'
import '../styles/nav.css'

function Nav() {
    return (
        <>
        <div className='nav'>
            <ul className='nav-list'>
                <li><p>1.</p> Work</li>
                <li><p>2.</p> About</li>
                <li><p>3.</p> Contact</li>
            </ul>
            <button className="resume-button">Resume</button>

        </div>
        </>
    )
}
export default Nav