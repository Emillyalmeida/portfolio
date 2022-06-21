import Container from "../../components/container";
import Title from "../../components/Title";
import { InfoContact, MailFone, Saudation } from "./style";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import imgAvatar from "../../assets/ReadyPlayerMe-Avatar.png";
import Footer from "../../components/footer";

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

      <MailFone>
        <div>
          <h2>
            <FiMail />
            Email
          </h2>
          <h3>emillyalmeidan@gmail.com</h3>
        </div>
        <div>
          <h2>
            <BsFillTelephoneFill />
            Telefone
          </h2>
          <h3>(75)98323-3925</h3>
        </div>
      </MailFone>
      <InfoContact>
        <a
          href="https://api.whatsapp.com/send?phone=5575983233925&text=Ol%C3%A1%20Emilly"
          target={"_blank"}
          rel="noreferrer"
        >
          <div>
            <BsWhatsapp />
            <h3>Whatsapp</h3>
          </div>
        </a>
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
      <Footer />
    </Container>
  );
};

export default Contact;
