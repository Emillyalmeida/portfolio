import Container from "../../components/container";
import Title from "../../components/Title";
import Footer from "../../components/footer";
import LinkSites from "../../components/link";

import imgAnime from "../../assets/myAnime.png";
import books from "../../assets/books.gif";
import croche from "../../assets/croche.webp";

import { ImBook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import { Hobbies, InfoHobbies } from "./style";
import { Saudation } from "../contact/style";

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
            Mas não é só de codigos que se vive um Desenvolvedora, eu também mo
            animais , principalmente gatos, tenho um que se chama Bichano. Sou a
            apaixonda por livros de ficção, assistir animes e series. Além
            disso,faço crochê, me ajuda bastante a desestressar e diminuir a
            ansiedade.
          </p>
        </div>
        <img src={imgAnime} alt="meu desenho" />
      </Saudation>
      <Hobbies>
        <h2>Hobbies</h2>
        <InfoHobbies>
          <img src={books} alt="gif menina lendo" />
          <div>
            <h2>Livros</h2>
            <p>
              A literatura é uma parte inportante da minha vida, através dela
              consigo conhecer uma diversidade de mundos e culturas sem sair de
              casa. Por meio da leitura somos capazes de enxergar outros pontos
              de vista e ampliar nossa maneira de pensar.Você pode acompanhar
              leituras pelo skoob.
            </p>
            <LinkSites
              isRow
              link={"https://www.skoob.com.br/share/user/Reader.Black"}
            >
              <ImBook />
              <h3>Skoob</h3>
            </LinkSites>
          </div>
        </InfoHobbies>

        <InfoHobbies isReverse>
          <img src={croche} alt="linha de croche" />
          <div>
            <h2>Crochê</h2>
            <p>
              O Crochê entrou na minha vida no meio da pandemia, estva ficando
              muito ansiosa na epoca por isso uma maiga deu a sugestão do
              crochê,no começo foi bem dificil mas passei a gostar bastante.
              Visite meu instagram para ver algumas peças.
            </p>
            <LinkSites
              isRow
              link="https://instagram.com/emma_croche?igshid=YmMyMTA2M2Y="
            >
              <BsInstagram />
              <h3>Instagram</h3>
            </LinkSites>
          </div>
        </InfoHobbies>
      </Hobbies>
      <Footer />
    </Container>
  );
};

export default AboutMe;
