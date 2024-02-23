// Styles
import { nav_hamburguer } from "../../../utils/hamburguer.js";
import "./Navbar.css";

import {useEffect} from "react"

const Navbar = () => {

  useEffect(() => {
    nav_hamburguer();
  }, [])

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
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a href="#curriculum" className="nav-link">
                Currículo
              </a>
            </li>
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
