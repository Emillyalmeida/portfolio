import imgTest from "../../assets/Adopet-cinza.png";
import { LiCard } from "./styles";

const Card = ({ onOpen }) => {
  return (
    <>
      <LiCard onClick={onOpen}>
        <img src={imgTest} alt="name" />
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
