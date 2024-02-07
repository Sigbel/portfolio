import styles from "./Footer.module.css"

const Footer = () => {
    const text = "Olá mundo!"

  return (
    <footer className={styles.footer}>
        {text}
    </footer>
  )
}

export default Footer