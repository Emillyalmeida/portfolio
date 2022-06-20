import Container from "../../components/container";
import Title from "../../components/Title";
import { Saudation } from "../contact/style";
import imgAnime from "../../assets/myanime.png";

const AboutMe = () => {
  return (
    <Container>
      <Title>
        <h1> Sobre mim</h1>
      </Title>
      <Saudation>
        <div>
          <p>
            Eu sou Desenvolvedora Fron-end, vivo no Brasil no estado da Bahia.
            Amo animais , principalmente gatos, tenho um que se chama Bichano.
            Sou a apaixonda por livros de ficção.
          </p>
        </div>
        <img src={imgAnime} alt="" />
      </Saudation>
    </Container>
  );
};

export default AboutMe;
