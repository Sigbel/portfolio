// Styles
import { nav_hamburguer } from "../../../utils/hamburguer.js";
import "./Navbar.css";

import { useEffect } from "react";

const Navbar = () => {
  const path = "http://localhost:5173/";

  // useEffect(() => {
  //   nav_hamburguer();
  // }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <a href={path + "#"}>
            <img
              src="src\assets\images\icons\hbs_ico.svg"
              alt="hbs"
              id="logo_ico"
            />
          </a>
          <ul className="navbar-items">
            <a href={path + "#about"} className="nav-link">
              <li className="nav-item">Sobre</li>
            </a>
            <a href={path + "#projects"} className="nav-link">
              <li className="nav-item">Projetos</li>
            </a>
            <a href={path + "#contact"} className="nav-link">
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
