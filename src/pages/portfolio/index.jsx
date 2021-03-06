import { useContext } from "react";

import Card from "../../components/card";
import Container from "../../components/container";
import Footer from "../../components/footer";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { ListProjectsContext } from "../../providers/projects";
import { ListUl, Slide } from "./style";

const Portfolio = () => {
  const { listProjects } = useContext(ListProjectsContext);
  return (
    <Container>
      <Carousel showThumbs={false}>
        {listProjects.map((project) => (
          <Slide key={project.id} img={project.img}>
            <div>
              <h2>{project.name}</h2>
            </div>
          </Slide>
        ))}
      </Carousel>
      <ListUl>
        {listProjects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </ListUl>
      <Footer />
    </Container>
  );
};

export default Portfolio;
