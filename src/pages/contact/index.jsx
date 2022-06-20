import Container from "../../components/container";
import Title from "../../components/Title";
import { InfoContact, Saudation } from "./style";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import imgAvatar from "../../assets/ReadyPlayerMe-Avatar.png";

const Contact = () => {
  return (
    <Container>
      <Title>
        <h1> Contato</h1>
      </Title>
      <Saudation>
        <div>
          <p>
            Fico feliz que queira entrar em contato comigo. Caso tenha alguma
            duvida ou sugestões fique a vontade para escolher como deseja me
            contatar, seja por email, telfone, github ou pelo LinkedIn, eu farei
            o maximo para responder o mais breve possível e ficarei alegre pelo
            seu feedback.
          </p>
        </div>
        <img src={imgAvatar} alt="" />
      </Saudation>
      <InfoContact>
        <div>
          <BsFillTelephoneFill />
          <h2>Telefone</h2>
          <h1>(75)983233925</h1>
        </div>
        <div>
          <FiMail />
          <h2>Email</h2>
          <h1>emillyalmeidan@gmail.com</h1>
        </div>
        <a
          href="https://github.com/Emillyalmeida"
          target={"_blank"}
          rel="noreferrer"
        >
          <div>
            <BsLinkedin />
            <h2>LinkedIn</h2>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/emilly-almeida-front-end/"
          target={"_blank"}
          rel="noreferrer"
        >
          <div>
            <BsGithub />
            <h2>GitHub</h2>
          </div>
        </a>
      </InfoContact>
    </Container>
  );
};

export default Contact;
