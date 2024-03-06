// Styles
import "./Navbar.css";

// Functions
import { nav_hamburguer } from "../../../utils/hamburguer.js";

const Navbar = () => {

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="/#">
            <img
              src="https://res.cloudinary.com/dvqvv2bkq/image/upload/v1709732536/images/icons/otojdxbvd0ob8zt9zpp5.svg"
              alt="hbs"
              id="logo_ico"
            />
          </a>
          <ul className="navbar-items">
            <a href="/#about" className="nav-link">
              <li className="nav-item">Sobre</li>
            </a>
            <a href="/#projects" className="nav-link">
              <li className="nav-item">Projetos</li>
            </a>
            <a href="/#contact" className="nav-link">
              <li className="nav-item">Contato</li>
            </a>
            <a
              href="https://drive.google.com/file/d/1_v147xba8Z5yn7WSR3vr21xlc7XGqEv2/view?usp=sharing"
              target="_blank"
              className="nav-link"
            >
              <li className="nav-item cv_btn">Currículo</li>
            </a>
          </ul>
          <div
            className="hamburguer"
            onClick={() => {
              nav_hamburguer();
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
