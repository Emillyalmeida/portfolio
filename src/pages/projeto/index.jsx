import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import Container from "../../components/container";

import { ListProjectsContext } from "../../providers/projects";
import { SectionProject } from "./style";

const Project = () => {
  const params = useParams();
  const history = useHistory();

  const { getProjectByID } = useContext(ListProjectsContext);

  const [project] = useState(getProjectByID(params.id));

  return (
    <Container>
      <SectionProject>
        <h1>{project.name}</h1>
        <div>
          <img src={project.img} alt={project.name} />
          <p>{project.description}</p>
          <ul>
            {project.techs.map((tech) => (
              <li key={tech}>
                <FaStar /> <p>{tech}</p>
              </li>
            ))}
          </ul>
          <div>
            <a href={project.github} target={"_blank"} rel="noreferrer">
              <button>GitHub</button>
            </a>

            <a href={project.link} target={"_blank"} rel="noreferrer">
              <button>Acessar</button>
            </a>
          </div>
        </div>
      </SectionProject>
    </Container>
  );
};

export default Project;
