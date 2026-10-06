import { memo, useDeferredValue, useState } from "react"

export const UseDeferredValueExample = () => {
    const [keyboard, setKeyboard] = useState("")

    const deferredKeyboard = useDeferredValue(keyboard)

    return (
        <>
            {/* Input component has a high priority to update itself as the user types and changes the value keyboard */}
            <input type="text" onChange={(e) => setKeyboard(e.target.value)} />

            {/* Heavy component use a deferredValue ,which will wait until all those high priority renders ends  */}
            <HeavyComponentMemo keyboard={deferredKeyboard} />
        </>
    )
}

const HeavyComponentMemo = memo(HeavyComponent)

const HeavyComponent = ({ keyboard }) => {
    const init = performance.now()
    while (init > performance.now() - 100) {
        // Slowing down the component on porpuse
    }

    return (
        <>
            <h2>I am a slow component</h2>
            {keyboard}
        </>
    )
}

