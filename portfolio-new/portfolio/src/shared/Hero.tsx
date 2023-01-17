import { Fragment } from 'react'
import '../styles/hero.css'
import { useWindowSize } from '../hooks/useWindowSize'

export function Hero() {

    const { isSmallerDevice } = useWindowSize()

    return (
        <Fragment>
            <div className='c-hero-container'>
                <div className='c-fullscreen-bg'>
                <video className='c-fullscreen-bg_video' playsInline autoPlay muted loop>
                    <source src='https://i.imgur.com/oHux9Z2.mp4' type='video/mp4' />
                </video>
                </div>
                <div className={ isSmallerDevice ? 'c-mobile-text-container' : 'c-text-container'}>
                    <h1 className='c-name-title'>Melissa Donegan</h1>
                    <p className='c-hero-desc'>Software Engineer + Designer</p>
                </div>
                <div className='c-arrow-container'>
                    <div className='c-arrow'></div>
                </div>
            </div>
        </Fragment>
    )
}