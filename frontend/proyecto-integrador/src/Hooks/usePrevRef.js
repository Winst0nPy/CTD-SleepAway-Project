import {useRef} from "react"

export const usePrevRef = value => {
    const currentRef = useRef()
    const prevRef = useRef()
    prevRef.current = currentRef.current
    currentRef.current = value
    return prevRef
}