// Styles
import "./Sidenav.css";

// Icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav_icons">
        <a href="https://github.com/Sigbel" target="_blank">
          <FaGithub></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/henrique-belgamo/" target="_blank">
          <FaLinkedinIn></FaLinkedinIn>
        </a>
      </div>
      <div className="sidenav_line"></div>
    </div>
  );
};

export default Sidenav;
