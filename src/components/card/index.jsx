import imgTest from "../../assets/Adopet-cinza.png";
import { LiCard } from "./styles";

const Card = () => {
  return (
    <LiCard>
      <img src={imgTest} alt="name" />
      <div></div>
      <section>
        <div>
          <p>Ver detalhes</p>
        </div>
      </section>
    </LiCard>
  );
};

export default Card;
