import { LiCard } from "./styles";

import { BsGithub } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { MdAddCircle } from "react-icons/md";

import { useHistory } from "react-router-dom";

const Card = ({ project }) => {
  const history = useHistory();
  return (
    <>
      <LiCard img={project.img}>
        <img src={project.img} alt={project.name} />
        <div></div>
        <section>
          <div>
            <h3 onClick={() => history.push(`/projetos/${project.id}`)}>
              {project.name}
            </h3>
            <div>
              <a target={"_blank"} rel="noreferrer" href={project.link}>
                <ImLink />
              </a>
              <a target={"_blank"} rel="noreferrer" href={project.github}>
                <BsGithub />
              </a>
              <button onClick={() => history.push(`/projetos/${project.id}`)}>
                <MdAddCircle />
              </button>
            </div>
          </div>
        </section>
      </LiCard>
    </>
  );
};

export default Card;
