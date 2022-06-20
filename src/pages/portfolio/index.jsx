import { useContext } from "react";
import Card from "../../components/card";
import Container from "../../components/container";
import { ListProjectsContext } from "../../providers/projects";
import { DivTitle, ListUl } from "./style";

const Portfolio = () => {
  const { listProjects } = useContext(ListProjectsContext);
  return (
    <Container>
      <DivTitle>
        <h1>Portfolio</h1>
      </DivTitle>
      <ListUl>
        {listProjects.map((project) => (
          <Card project={project} key={project.id} />
        ))}
      </ListUl>
    </Container>
  );
};

export default Portfolio;
