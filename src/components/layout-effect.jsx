import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const LayoutEffectExample = () => {
    const [show, setShow] = useState(false)
    const [top, setTop] = useState(0)
    const buttonRef = useRef()

    /**
     * After show = true, 
     * the render set the message on top , at top= 0
     * then, this useEffect gets the boundaries an set it properly...
     * but, there were a movement of the text
     * useEffect is asyncronous
     */
    // useEffect(() => {
    //     if (buttonRef.current === null || !show) return setTop(0)
    //     const { bottom } = buttonRef.current.getBoundingClientRect()
    //     setTop(bottom + 30)
    // }, [show])

    /** 
     * after show change, 
     * runs the layout effect before showing the render
     * useEffect is syncronous
     */
    useLayoutEffect(() => {
        if (buttonRef.current === null || !show) return setTop(0)
        const { bottom } = buttonRef.current.getBoundingClientRect()
        setTop(bottom + 30)
    }, [show])

    const now = performance.now()
    while (now > performance.now() - 100) {
        // do nothing or do something that takes time
    }

    const topStyle = `${top}px`

    return (
        <>
            <button ref={buttonRef}
                onClick={() => setShow(s => !s)}>SHOW</button>
            {
                show && <div style={{
                    position:"absolute",
                    top: topStyle,
                    border: "1px",
                    borderStyle: "dashed"
                }}>
                    <p>Show text</p>
                </div>
            }
        </>
    )
}