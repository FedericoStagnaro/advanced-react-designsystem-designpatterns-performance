
const Panel = ({ children, flex }) => {
    return <div style={{ flex: flex }}>{children}</div>
}

const Container = ({ children }) => {
    return <div style={{ display: "flex" }}>{children}</div>
}

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
    const [left, right] = children;
    console.log("[children-lengt]", children)
    return (
        <Container>
            <Panel flex={leftWidth}>{left}</Panel>
            <Panel flex={rightWidth}>{right}</Panel>
        </Container>
    )
}