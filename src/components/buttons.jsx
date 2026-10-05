import { emitter } from "../App"

export const Buttons = () => {
    const onIncrementCounter = () => {
        emitter.emit("INCREMENT")
    }
    const onDecrementCounter = () => {
        emitter.emit("DECREMENT")
    }

    return (
        <div>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementCounter}>-</button>
        </div>
    )
}

