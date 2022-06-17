import BtnMode from "../../components/btnMode";
import Nav from "../../components/nav";
import { IAm, InfoMe } from "./style";
import myimg from "../../assets/IMG_20220305_120632-removebg-preview.png";

const Home = () => {
  return (
    <>
      <Nav />
      <BtnMode />
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
          Iniciei a minha jornada na programação em 2021. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ea, tempore. Doloremque impedit
          nihil, exercitationem ut dolor at ab iure corrupti consequatur sequi
          nesciunt consectetur, rem repellendus. Amet odit voluptatibus
          provident!
        </p>
      </InfoMe>
    </>
  );
};

export default Home;
