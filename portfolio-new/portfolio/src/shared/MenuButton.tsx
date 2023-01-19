import { useState } from 'react'
import '../styles/menubutton.css'

export function MenuButton(): JSX.Element {

    const [ open, setOpen ] = useState<boolean>(false)

    const changeNav = () => {
        setOpen(!open)
    }

    return (
        <span onClick={ changeNav } className={open ? 'close' : ''}>
            <div className={'bar1'}></div>
            <div className={'bar2'}></div>
            <div className={'bar3'}></div>
        </span>
    )
}