import React from 'react'
import Nav from '../shared/Nav'
import Hero from '../shared/Hero'
import Work from '../shared/Work'
import About from '../shared/About'
import Languages from '../shared/Languages'
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'
import "../styles/container.scss"


class Container extends React.Component {
    constructor() {
    super()
    }

    componentDidMount(){
        fetch('https://mel-portfolio-server.herokuapp.com/')
    }
    
    render() {
        return (
            <>
            <Nav />
            <div className='hero'>
            <Hero />
            </div>
            <div className="about">
            <About />
            </div>
            <div className="languages">
            {/* <Languages /> */}
            </div>
            <div className="work">
            <Work />
            </div>
            <div className="contact">
            <Contact />
            </div>
            <Footer />
            </>
        )
    }
}

export default Container