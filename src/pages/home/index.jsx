import {
  AboutMe,
  BtnSeeMore,
  IAm,
  InfoMe,
  Logo,
  MyContact,
  MyPortfolio,
  MySkills,
} from "./style";
import myimg from "../../assets/IMG_20220305_120632-removebg-preview.png";
import test from "../../assets/animeMe__2_-removebg-preview.png";
import Container from "../../components/container";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "../../components/card";
import Footer from "../../components/footer";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ListProjectsContext } from "../../providers/projects";

const Home = () => {
  const { listProjects } = useContext(ListProjectsContext);
  const history = useHistory();

  return (
    <>
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
            <img src={test} alt="emilly" />
          </figure>
        </IAm>
        <InfoMe>
          <h2>Seja Bem-vindo(a) !!!</h2>
          <p>
            Obrigada pela sua visita !!! Aqui você vai conhecer mais sobre o que
            faço e quem eu sou.Iniciei a minha jornada na programação em 2021.
            Desde então, tenho me dedicado a aprender e evoluir cada vez minhas
            mais habilidades. Fique a vontade para explorar todas as seções do
            site, acompanhe minha trajetória, os projetos que estou
            desenvolvendo e o que estou estudando.
          </p>
        </InfoMe>
        <MySkills>
          <h3>Minhas habilidades</h3>
          <ul>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                alt="ReactJs"
              />
              <span>&lt; ReactJs /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="Javascript"
              />
              <span>&lt; JavaScript /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
              <span>&lt; TypeScript /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
                alt="git"
              />
              <span>&lt; Git /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <span> &lt; Css /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="Html"
              />
              <span> &lt; Html /&gt;</span>
            </li>
          </ul>
        </MySkills>

        <MyPortfolio>
          <h2>Portfólio</h2>
          <ul>
            {listProjects.map((project) => (
              <Card project={project} key={project.id} />
            ))}
          </ul>
          <BtnSeeMore onClick={() => history.push("/portfolio")}>
            Veja Mais
          </BtnSeeMore>
        </MyPortfolio>
        <AboutMe>
          <div>
            <h2> Sobre mim</h2>
            <p>
              Prazer sou a Emilly! Tenho 22 anos, sou formada em tecnica qm
              quimica mas atualmente sou Desenvolvedora Front-End.Sou Bahiana,
              amo experimentar coisas novas e desbravar Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Sint impedit omnis reiciendis
              sed doloribus rerum consequatur obcaecati tenetur esse, dolorum
              ipsa.
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
          <h3>Estudando...</h3>
          <ul>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"
                alt="Jest"
              />
              <span>&lt; Jest/&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="Html"
              />
              &lt; Testes E2E /&gt;
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
              <span>&lt; MySQL /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                alt="NodeJs"
              />
              <span>&lt; Node.js /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="Sass"
              />
              <span>&lt; Sass /&gt;</span>
            </li>
            <li>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
                alt="VueJs"
              />
              <span>&lt; Vue.js /&gt;</span>
            </li>
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
        <Footer />
      </Container>
    </>
  );
};

export default Home;
