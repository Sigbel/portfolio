import styles from "./Footer.module.css"

const Footer = () => {
    const text = "Olá mundo!"

  return (
    <footer className={styles.footer}>
        <span>{text}</span>
    </footer>
  )
}

export default Footer