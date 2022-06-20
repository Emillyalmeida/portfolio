import { ModalContainer, MSection } from "./styles";
import imgTest from "../../assets/Adopet-cinza.png";

const ModalProject = ({ onClose, isOpen }) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <MSection>
        <main>
          <img src={imgTest} alt="" />
          <section>
            <header>
              <h2>Adopet</h2>
              <button
                onClick={() => {
                  onClose();
                }}
              >
                x
              </button>
            </header>
            <div>
              <h3>descrption</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                facilis ea numquam aliquam quia molestias quibusdam dolor ipsam
                nisi culpa ratione laborum corrupti, repellendus qui
                consequuntur ab sit veritatis voluptates.
              </p>
            </div>
            <div>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>Css</li>
              </ul>
            </div>
            <footer>
              <button>Ver o codigo</button>
              <button>Visitar projeto</button>
            </footer>
          </section>
        </main>
      </MSection>
    </ModalContainer>
  );
};

export default ModalProject;
