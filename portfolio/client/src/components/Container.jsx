import React from 'react'
import Nav from '../shared/Nav'
import Hero from '../shared/Hero'
import Work from '../shared/Work'
import About from '../shared/About'
import Languages from '../shared/Languages'
import Contact from '../shared/Contact'
import Footer from '../shared/Footer'


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
            <Hero />
            <Work />
            <About />
            <Languages />
            <Contact />
            <Footer />
            </>
        )
    }
}

export default Container