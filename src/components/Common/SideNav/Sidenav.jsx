// Styles
import "./Sidenav.css";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav_icons">
        <a href="#about">
          <FaGithub></FaGithub>
        </a>
        <a href="#projects">
          <FaLinkedinIn></FaLinkedinIn>
        </a>
      </div>
      <div className="sidenav_line"></div>
    </div>
  );
};

export default Sidenav;
