// Styles
import { nav_hamburguer } from "../../../utils/hamburguer.js";
import "./Navbar.css";

import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    nav_hamburguer();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <a href="#">
            <img
              src="src\assets\images\icons\hbs_ico.svg"
              alt="hbs"
              id="logo_ico"
            />
          </a>
          <ul className="navbar-items">
            <a href="#about" className="nav-link">
              <li className="nav-item">Sobre</li>
            </a>
            <a href="#projects" className="nav-link">
              <li className="nav-item">Projetos</li>
            </a>
            <a href="#contact" className="nav-link">
              <li className="nav-item">Contato</li>
            </a>
            <a href="#curriculum" className="nav-link">
              <li className="nav-item cv_btn">Currículo</li>
            </a>
          </ul>
          <div className="hamburguer">
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
