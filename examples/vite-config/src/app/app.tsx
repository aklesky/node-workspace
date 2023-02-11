import styles from '../styles/main.scss'

export default () => {
    console.log(styles)
    return (
        <>
            <style>{styles}</style>
            <h1>Hello World Example</h1>
        </>
    )
}
