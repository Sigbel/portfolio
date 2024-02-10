import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.navbar_logo}>Sigbel</div>
        <div className={styles.navbar_itens}>
          <span>Home</span>
          <span>Portfolio</span>
          <span>Outros</span>
        </div>
    </div>
  )
}

export default Navbar