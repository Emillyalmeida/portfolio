import { LiCard } from "./styles";
import { useDisclosure } from "@chakra-ui/react";
import ModalProject from "../ModalProject";

const Card = ({ project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalProject onClose={onClose} isOpen={isOpen} project={project} />
      <LiCard onClick={onOpen} img={project.img}>
        <img src={project.img} alt={project.name} />
        <div></div>
        <section>
          <div>
            <p>Veja detalhes</p>
          </div>
        </section>
      </LiCard>
    </>
  );
};

export default Card;
