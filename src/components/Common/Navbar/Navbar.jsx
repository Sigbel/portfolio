// Hooks
import { useState, useEffect } from "react";

// Styles
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        closeMenu();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <div
            className={`hamburguer ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`navbar-items ${isOpen ? "active" : ""}`}>
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
        </nav>
      </header>
    </>
  );
};

export default Navbar;
