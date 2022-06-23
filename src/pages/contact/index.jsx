import Container from "../../components/container";
import Title from "../../components/Title";
import Footer from "../../components/footer";
import LinkSites from "../../components/link";

import { FormContainer, InfoContact, MailFone, Saudation } from "./style";

import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import imgAvatar from "../../assets/ReadyPlayerMe-Avatar.png";
import contactme from "../../assets/contact-page-banner.png";

const Contact = () => {
  return (
    <Container>
      <Title>
        <h1> Contato</h1>
      </Title>
      <Saudation>
        <img src={imgAvatar} alt="meu avatar" />
        <div>
          <p>
            Fico feliz que queira entrar em contato comigo. Caso tenha alguma
            duvida ou sugestões fique a vontade para escolher como deseja me
            contatar, seja por email, telfone, github ou pelo LinkedIn, eu farei
            o maximo para responder o mais breve possível e ficarei alegre pelo
            seu feedback.
          </p>
        </div>
      </Saudation>

      <FormContainer>
        <div>
          <img src={contactme} alt="" />
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/emillyalmeidan@gmail.com"
          method="POST"
        >
          <h3>Fale Comigo</h3>
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Digite seu feedback aqui !!"
            required
          />
          <button type="submit">Enviar mensagem</button>
        </form>
      </FormContainer>

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
        <LinkSites href="https://api.whatsapp.com/send?phone=5575983233925&text=Ol%C3%A1%20Emilly">
          <BsWhatsapp />
          <h2>Whatsapp</h2>
        </LinkSites>
        <LinkSites link="https://github.com/Emillyalmeida">
          <BsLinkedin />
          <h2>LinkedIn</h2>
        </LinkSites>
        <LinkSites link="https://www.linkedin.com/in/emilly-almeida-front-end/">
          <BsGithub />
          <h2>GitHub</h2>
        </LinkSites>
      </InfoContact>
      <Footer />
    </Container>
  );
};

export default Contact;
