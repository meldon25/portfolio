import { useWindowSize } from '../hooks/useWindowSize'
import '../styles/about.css'

export function About(): JSX.Element {

    const { isSmallerDevice } = useWindowSize()

    return (
        <section className="main-about">
        <h2 className={ isSmallerDevice ? 'about-header-mobile' : 'about-header'}>About Me</h2>
            <div className="about-cont">
            <div className={ isSmallerDevice ? 'left-side-mobile' : 'left-side'}>
                <p className="about-pg">I'm a software engineer and designer who is
                dedicated to designing and developing cutting-edge software for companies 
                to use, so they can focus on growing their business.</p>

                <p className="about-pg">I currently work for Mediafly, a B2B SaaS company that focuses on 
                solutions, such as sales enablement and revenue intelligence to support and aid business growth.
                I have completed a variety of projects in React, Angular, and TypeScript and worked closely with 
                micro-frontend architecture.
                </p>
                <p className="about-pg">My experience in coding combined with my education in art and design has fueled my 
                passion to merge good visual design and technology to bring brands to life digitally.
                I specialize in bridging the gap between a company&#39;s ideas and the online
                execution of their brand vision. 
                </p>
            </div>
            <div className={ isSmallerDevice ? 'mobile-photo' : 'right-side'}>
                <div className="photo-cont">
                    <img className="photo-box" src="https://i.imgur.com/jKaDrJM.jpg" alt='Mel' />
                </div>
            </div>
        </div>
      </section>
    )
}