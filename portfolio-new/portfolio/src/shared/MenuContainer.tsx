import { useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import '../styles/menucontainer.css'
import { MenuButton } from './MenuButton'

export function MenuContainer() {

    const [ open, setOpen ] = useState<boolean>(false)
    const { isSmallerDevice } = useWindowSize()

    const changeNav = () => {
        setOpen(!open)
    }

    return (
        <div>
        <div className='menubutton' onClick={ changeNav }><MenuButton /></div>
            <div className={open && !isSmallerDevice ? 'open' : 'closed'}>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <a type="button" className="resume-button" href="https://drive.google.com/file/d/1Bw1dOn66QGcj4dLepDiDYY0lmKoQsuc5/view?usp=sharing">Resume</a>
            </div>
            <div className={open && isSmallerDevice ? 'open-mobile' : 'closed'}>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
                <a type="button" className="resume-button" href="https://drive.google.com/file/d/1Bw1dOn66QGcj4dLepDiDYY0lmKoQsuc5/view?usp=sharing">Resume</a>
            </div>
        </div>
    )

}