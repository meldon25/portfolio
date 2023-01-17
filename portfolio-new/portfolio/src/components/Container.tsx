import { Fragment, useEffect } from 'react'
import { Hero } from '../shared/Hero'

export function Container() {

    useEffect(() => {
        fetch('https://mel-portfolio-server.herokuapp.com/')
    },[])

    
    return (
        <Fragment>
            <div className='hero'>
                <Hero />
            </div>
        </Fragment>
    )
}