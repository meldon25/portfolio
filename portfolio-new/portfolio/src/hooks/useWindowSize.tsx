import { useState } from 'react'
import useEventListener from './useEventListener'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

interface WindowSize {
    height: number
    width: number
    isSmallerDevice: boolean
}

export function useWindowSize(): WindowSize {

    const [windowSize, setWindowSize] = useState<WindowSize>({
        height: 0,
        width: 0,
        isSmallerDevice: false,
    })

    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isSmallerDevice: window.innerWidth < 600
        })
    }

    useEventListener('resize', handleSize)

    useIsomorphicLayoutEffect(() => {
        handleSize()
    }, [])

    return windowSize
}