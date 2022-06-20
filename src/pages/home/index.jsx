import BtnMode from "../../components/btnMode";
import Nav from "../../components/nav";
import {
  AboutMe,
  BtnSeeMore,
  Footer,
  IAm,
  InfoMe,
  Logo,
  MyContact,
  MyPortfolio,
  MySkills,
} from "./style";
import myimg from "../../assets/IMG_20220305_120632-removebg-preview.png";
import Container from "../../components/container";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "../../components/card";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import ModalProject from "../../components/ModalProject";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  return (
    <>
      <Nav />
      <BtnMode />
      <ModalProject onClose={onClose} isOpen={isOpen} />
      <Container>
        <Logo>
          <div>
            <span>E</span>
          </div>
        </Logo>
        <IAm>
          <div>
            <h1>Olá, Eu sou a Emilly</h1>
            <h2>Desenvolvedora Front-End</h2>
          </div>
          <figure>
            <img src={myimg} alt="emilly" />
          </figure>
        </IAm>
        <InfoMe>
          <h2>É um prazer ver você aqui !!!</h2>
          <p>
            Seja Bem-vindo(a) !!! Aqui você vai conhecer mais sobre o que faço e
            quem eu sou.Iniciei a minha jornada na programação em 2021. Desde
            então, tenho me dedicado a aprender e evoluir cada vez minhas mais
            habilidades. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit
          </p>
        </InfoMe>
        <MySkills>
          <h3>Minhas habilidades</h3>
          <ul>
            <li> &lt; ReactJs /&gt;</li>
            <li>&lt; JavaScript /&gt;</li>
            <li> &lt; TypeScript /&gt;</li>
            <li> &lt; Git /&gt;</li>
            <li> &lt; Css /&gt;</li>
            <li> &lt; Html /&gt;</li>
          </ul>
        </MySkills>

        <MyPortfolio>
          <h2>Portfólio</h2>
          <ul>
            <Card onOpen={onOpen}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </ul>
          <BtnSeeMore onClick={() => history.push("/portfolio")}>
            Veja Mais
          </BtnSeeMore>
        </MyPortfolio>
        <AboutMe>
          <div>
            <h2> Sobre mim</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              impedit omnis reiciendis sed doloribus rerum consequatur obcaecati
              tenetur esse, cum error recusandae aliquid ipsum eligendi, vitae
              sequi sit, dolorum ipsa.
            </p>
            <BtnSeeMore onClick={() => history.push("/sobre-mim")}>
              Me conheça
            </BtnSeeMore>
          </div>
          <figure>
            <img src={myimg} alt="emilly" />
          </figure>
        </AboutMe>
        <MySkills>
          <h3>Estou estudando</h3>
          <ul>
            <li> &lt; Testes unitarios /&gt;</li>
            <li>&lt; Testes E2E /&gt;</li>
            <li> &lt; SQL /&gt;</li>
            <li> &lt; Node.js /&gt;</li>
            <li> &lt; Sass /&gt;</li>
            <li> &lt; Vue.js /&gt;</li>
          </ul>
        </MySkills>
        <MyContact>
          <h2> Acompanhe meus projetos</h2>
          <div>
            <a
              href="https://github.com/Emillyalmeida"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emilly-almeida-front-end/"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <BtnSeeMore onClick={() => history.push("/contato")}>
            Contato
          </BtnSeeMore>
        </MyContact>
        <Footer>
          <h3> &copy; Emilly Almeida</h3>
        </Footer>
      </Container>
    </>
  );
};

export default Home;
