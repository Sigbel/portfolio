// Styles
import "./Landing.css";

const Landing = () => {
  return (
    <section id="landing">
      <div className="container_landing">
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
      </div>
      <div id="scroll_down">
        <a href="#about">
          <div id="mouse"></div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
