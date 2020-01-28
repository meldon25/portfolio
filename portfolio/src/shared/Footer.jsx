import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
        <>
            <div className="footer-cont">
                <div className="icons">
                    <a href="https://github.com/meldon25">
                    <img src="https://i.imgur.com/FRFJoTu.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/mel-donegan/">
                    <img src="https://i.imgur.com/n8IfiYt.png" />
                    </a>

                </div>
                <div class="vl"></div>
            </div>
            <div className="bottom-cont">
            {/* <p>Designed and built by Melissa Donegan</p> */}
            <div className="copyright">
            <p>© Melissa Donegan 2020</p>
            </div>
            </div>  
             
    
        </>
    )
}
export default Footer