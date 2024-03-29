import { Fragment, useEffect } from 'react'
import { About } from '../shared/About'
import { Hero } from '../shared/Hero'
import { Nav } from '../shared/Nav'


export function Container() {

    useEffect(() => {
        // fetch('https://mel-portfolio-server.herokuapp.com/')
    },[])

    
    return (
        <Fragment>
            <Nav />
            <div className='hero'>
                <Hero />
            </div>
            <div className='about'>
                <About />
            </div>
        </Fragment>
    )
}