import { useState } from "react"
import { createPortal } from "react-dom";
/**
 * Without react portal, the alert is attached to the div,  as de virtual dom of react
 * in order to show this alert in a different place, we use React portals
 * With it, the alert is attached to another component of the real dom.
 * @returns 
 */
export const ReactPortal = () => {
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "absolute", marginTop: "200px" }}>
            <h1>Other Content</h1>
            <button onClick={() => setShow(true)}>Show Message Alert</button>
            <Alert show={show} onClose={() => setShow(false)}>
                A Sample of meesage to show.
                <br />
                Click it to close.
            </Alert>
        </div>
    )
}


const Alert = ({ children, onClose, show }) => {
    if (!show) return;
    return createPortal(
        <div className="alert" onClick={onClose}>
            {children}
        </div>,
        document.querySelector("#alert-holder")
    )
}

