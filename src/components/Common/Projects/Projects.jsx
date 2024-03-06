// Chakra Ui
import { Box, Center, VStack } from "@chakra-ui/react";

// Carousel data
import { cards_carrousel } from "../../../utils/data/components-data.json";

// Styles
import "./Projects.css";

// React Router
import { Link } from "react-router-dom";

// Components
import CardSlider from "../../Carousels/Carousels/CardCarousel.jsx";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container_projects">
        <h5>Portfólio</h5>
        <h1>
          Confira alguns dos meus <span>projetos</span>
        </h1>
        <Center>
          <Box maxW="1280px">
            {cards_carrousel && (
              <CardSlider cards={cards_carrousel}></CardSlider>
            )}
          </Box>
        </Center>
        <Link to="/projects" className="btn_more_about">
          Mais projetos
        </Link>
      </div>
    </section>
  );
};

export default Projects;
