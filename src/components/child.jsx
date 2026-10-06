export const Child = () => {
    // Simulate a runtime error
    throw new Error("Error in Component")
    return (
        <div>
            <p>
                Child
            </p>
        </div>
    )
}