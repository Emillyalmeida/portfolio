import { ModalContainer, MSection } from "./styles";

const ModalProject = ({ onClose, isOpen, project }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <MSection>
        <main>
          <img src={project.img} alt={project.name} />
          <section>
            <header>
              <h2>{project.name}</h2>
            </header>
            <div>
              <p>{project.description}</p>
            </div>
            <div>
              <ul>
                {project.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <footer>
              <button>GitHub</button>
              <button>Acessar</button>
            </footer>
          </section>
          <button
            onClick={() => {
              onClose();
            }}
          >
            x
          </button>
        </main>
      </MSection>
    </ModalContainer>
  );
};

export default ModalProject;
