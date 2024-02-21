// Chakra Ui
import { Box, Center, VStack } from "@chakra-ui/react";

// Carousel data
import { cards_carrousel } from "../../../utils/data/components-data.json";

// Styles
import "./Projects.css";

// Components
import CardSlider from "../../Carousels/Carousels/CardCarousel.jsx";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container_projects">
        <h1>Meus <span>projetos</span> recentes</h1>
        <Center>
          <Box maxW="1280px">
            {cards_carrousel && (
              <CardSlider cards={cards_carrousel}></CardSlider>
            )}
          </Box>
        </Center>
        <a href="#contact" className="btn_more_about">
          Mais projetos
        </a>
      </div>
    </section>
  );
};

export default Projects;
