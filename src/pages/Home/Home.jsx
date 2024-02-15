import "./Home.css";

// Components
import Background from "./Background";

// Functions
import typewriting from "../../utils/typewriting";

const Home = () => {
  typewriting();
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
      <section id="landing">
        <div id="title_name">
          <h1>Henrique Bélgamo</h1>
          <div id="fixed_title">
            <h2>Desenvolvedor</h2>
            <div className="title_hline"></div>
          </div>
          <h2 id="title_prof">
            <div id="text_typewriting"></div>
            <div id="cursor"></div>
          </h2>
        </div>
        <a href="#about">
          <span className="scroll_down"></span>
        </a>
      </section>
      <section id="about">Sobre</section>
      <section id="projects">Projetos</section>
      <section id="contact">Contato</section>
    </div>
  );
};

export default Home;
