import React from 'react'
import '../styles/footer.scss'

function Footer() {
    return (
        <>
            <div className="footer-cont">
                <div className="icons">
                    <a href='#Contact'>
                    <img src="https://i.imgur.com/ebvgPUK.png" />
                    </a>
                    <a href="https://github.com/meldon25">
                    <img src="https://i.imgur.com/YmVXcfq.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/mel-donegan/">
                    <img 
                    src="https://i.imgur.com/OdQxAzg.png" 
                    className="linkedin"
                    />
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