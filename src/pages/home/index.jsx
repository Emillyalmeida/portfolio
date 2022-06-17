import BtnMode from "../../components/btnMode";
import Nav from "../../components/nav";
import {
  AboutMe,
  BtnSeeMore,
  IAm,
  InfoMe,
  MyPortfolio,
  MySkills,
} from "./style";
import myimg from "../../assets/IMG_20220305_120632-removebg-preview.png";
import Container from "../../components/container";

const Home = () => {
  return (
    <>
      <Nav />
      <BtnMode />
      <Container>
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
            Iniciei a minha jornada na programação em 2021. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ea, tempore. Doloremque
            impedit nihil, exercitationem ut dolor at ab iure corrupti
            consequatur sequi nesciunt consectetur, rem repellendus. Amet odit
            voluptatibus provident!
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
          <h2>Portifolio</h2>
          <ul></ul>
          <BtnSeeMore>Veja Mais</BtnSeeMore>
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
            <BtnSeeMore>Me conheça</BtnSeeMore>
          </div>
          <figure>
            <img src="" alt="" />
          </figure>
        </AboutMe>
      </Container>
    </>
  );
};

export default Home;
