export const logProps = (Component) => {

    return (props) => {
        console.log("[logProps]", props);
        return <Component {...props} />
    }
}