import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar_logo">
          <a href="#">Sigbel</a>
        </div>
        <div className="navbar_items">
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
          <a href="#curriculum" id="cv_btn">Currículo</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
