import "./About.css";

// Components
import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about">
      <div className="container_about">
        <div className="description">
          <h1>Olá, me chamo <span id="highlight">Henrique</span>!</h1>
          <span>
            Sou formado em Automação Industrial, trabalhei 2 anos como
            Projetista Mecânico e Analista Financeiro. Atualmente atuo como
            freelancer, oferecendo soluções completas em sistemas integrados,
            desktop, sistemas web, design gráfico e edições de vídeo.
          </span>
          <span>
            Costumo me esforçar ao máximo para extrair todo meu potêncial
            criativo enquanto estou desenvolvendo, me preocupo principalmente em
            entregar uma experiência agradável e acima de tudo prática ao
            usuário. Desenvolvo todas as etapas do projeto, desde seu rascunho,
            idealização, primeiras linhas de código, até a sua finalização e
            disponibilização para o usuário.
          </span>
          <span className="highlight_text">
            Desenvolvedor de Software com habilidades diversas:
          </span>
          <li>
            <span className="highlight_text">Programação:</span> FrontEnd
            (CSS/React [Hooks, Router, Redux, Webpack, Designer
            Responsivo]/Bootstrap), BackEnd (Python [Orientação a Objetos,
            Cython, Multiprocessamento, Automação], NodeJs, básico em C#).
          </li>
          <li>
            <span className="highlight_text">Qualidade:</span> Clean Code,
            Test-Driven Development (TDD), Metodologias Ágeis (Kanban, Scrum).
          </li>
          <div className="container_tech">
            <TechStack></TechStack>
          </div>
          <div className="more_about">
            <a href="#projects" className="btn_more_about">
              saiba mais
            </a>
          </div>
        </div>
        <div className="photo">
          <img
            src="src\assets\images\photo\profile_image.jpg"
            alt="profile_image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
