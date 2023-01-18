import { useState } from 'react'
import '../styles/menucontainer.css'
import { MenuButton } from './MenuButton'

export function MenuContainer() {

    const [ open, setOpen ] = useState<boolean>(false)

    const changeNav = () => {
        setOpen(!open)
    }

    return (
        <div>
        <div className='menubutton' onClick={ changeNav }><MenuButton /></div>
            <div className={open ? 'open' : 'closed'}>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )

}