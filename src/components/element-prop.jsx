import styles from "./button.module.css"

const Button = ({
    As = "button",
    size = "m",
    className = "",
    ...other
}) => {
    return (
        <As
            {...other}
            className={`${styles.button} ${styles[size]} ${className}`}
        />
    )
}

export const ElementPropExample = () => {
    return (
        <>
            <Button size="s">Small</Button>
            <Button size="m">Medium</Button>
            <Button size="l">Large</Button>
            <Button size="xl">xLarge</Button>
            <Button
                As="a"
                href="/"
                size="m"
            >
                Link
            </Button>
        </>
    )
}