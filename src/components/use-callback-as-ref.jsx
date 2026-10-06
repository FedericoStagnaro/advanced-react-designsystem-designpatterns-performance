import { useCallback, useEffect, useRef, useState } from "react"

export const UseCallbackAsRefExample = () => {
    const [showInput, setShowInput] = useState(false)
    const realInputRef = useRef();
    const inputRef = useCallback((inputElement) => {
        realInputRef.current = inputElement;
        if (inputElement) inputElement.focus()
    }, [])


    /**
     * It throws an error because, the inputElement is'nt rendered yet
     */
    // const inputRef = useRef()
    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])

    return (
        <>
            <button onClick={() => setShowInput(s => !s)}>Show</button>
            {
                showInput && <input
                    type="text"
                    ref={inputRef}
                />
            }
        </>
    )
}