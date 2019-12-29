import React from 'react'
import Nav from '../shared/Nav'
import Hero from '../shared/Hero'
import About from '../shared/About'

class Container extends React.Component {
    constructor() {
    super()
    }
    render() {
        return (
            <>
            <Nav />
            <Hero />
            <About />
            </>
        )
    }
}

export default Container