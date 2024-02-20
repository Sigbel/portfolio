// Styles
import "./Home.css";

// Hooks
import { useEffect } from "react";

// Functions
import typewriting from "../../utils/typewriting";
import Projects from "../../components/Common/Projects/Projects";

// Components
import Background from "../../components/Common/Background/Background";
import Landing from "../../components/Common/Landing/Landing";
import About from "../../components/Common/About/About";
import Contact from "../../components/Common/Contact/Contact";

const Home = () => {
  useEffect(() => {
    typewriting();
  }, []);

  return (
    <div className="container_initial">
      <Background></Background>
      <div className="sidenav">
        <a href="#about">
          <img src="src\assets\images\icons\github_ico.svg" alt="github" />
        </a>
        <a href="#projects">
          <img src="src\assets\images\icons\linkedin_ico.svg" alt="linkedin" />
        </a>
        <div className="sidenav_line"></div>
      </div>
      <Landing></Landing>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
