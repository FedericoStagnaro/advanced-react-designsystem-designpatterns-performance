import { useEffect, useState } from "react"
import { emitter } from "../App"

export const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // handler events
        const onIncrement = () => setCount(prev => prev + 1)
        const onDecrement = () => setCount(prev => prev - 1)

        // Subscribe handler cb to event listerner
        emitter.on("INCREMENT", onIncrement)
        emitter.on("DECREMENT", onDecrement)

        // unsubscribe listeners on unmount
        return () => {
            emitter.off("INCREMENT")
            emitter.off("DECREMENT")
        }
    }, [])

    return <div>#: {count}</div>
}