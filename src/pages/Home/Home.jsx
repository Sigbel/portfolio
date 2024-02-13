import "./Home.css";

// Components
import Background from "./Background";

const Home = () => {
  return (
    <div className="container_initial">
      <div className="sidenav">
        <a href="#about">
          <img src="src\assets\images\icons\github_ico.svg" alt="github" />
        </a>
        <a href="#projects">
          <img src="src\assets\images\icons\linkedin_ico.svg" alt="linkedin" />
        </a>
        <div className="sidenav_line"></div>
      </div>
      <div id="landing">
        <Background></Background>
      </div>
      <div id="about">Sobre</div>
      <div id="projects">Projetos</div>
      <div id="contact">Contato</div>
    </div>
  );
};

export default Home;
