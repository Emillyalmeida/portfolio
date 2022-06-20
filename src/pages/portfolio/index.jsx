import { useContext } from "react";
import Card from "../../components/card";
import Container from "../../components/container";
import Title from "../../components/Title";
import { ListProjectsContext } from "../../providers/projects";
import { ListUl } from "./style";

const Portfolio = () => {
  const { listProjects } = useContext(ListProjectsContext);
  return (
    <Container>
      <Title>
        <h1>Portfolio</h1>
      </Title>
      <ListUl>
        {listProjects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </ListUl>
    </Container>
  );
};

export default Portfolio;
