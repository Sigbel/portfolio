// Styles
import "./OtherProjects.css";

// Data
import { cards_showcase } from "../../utils/data/components-data.json";

// Functions
import filter_projects from "../../utils/projects";

// Components
import Background_P from "../../components/Common/Background/Background_P";
import Card from "../../components/Cards/Card/Card";

const OtherProjects = () => {
  return (
    <div>
      <Background_P></Background_P>
      <section className="other_projects">
        <div className="container_other_projects">
          <div className="filter">
            <h1>Projetos</h1>
            <button
              className="btn_filter"
              onClick={() => {
                filter_projects("showall");
              }}
            >
              Todos
            </button>
            <button
              className="btn_filter"
              onClick={() => {
                filter_projects("web");
              }}
            >
              Web
            </button>
            <button
              className="btn_filter"
              onClick={() => {
                filter_projects("application");
              }}
            >
              Aplicativos
            </button>
            <button
              className="btn_filter"
              onClick={() => {
                filter_projects("utility");
              }}
            >
              Utilitários
            </button>
            <button
              className="btn_filter"
              onClick={() => {
                filter_projects("logic");
              }}
            >
              Lógica
            </button>
          </div>
          <div className="projects_showcase">
            {cards_showcase.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                content={card.content}
                image={card.image}
                link={card.link}
                page="/projects"
                filter={card.filter}
              ></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProjects;
