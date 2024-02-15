import "./Home.css";

// Hooks
import { useEffect } from "react";

// Components
import Background from "../../components/Background/Background";
import Landing from "../../components/Landing/Landing";

// Functions
import typewriting from "../../utils/typewriting";

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
      
      <section id="projects">Projetos</section>
      <section id="contact">Contato</section>
    </div>
  );
};

export default Home;
