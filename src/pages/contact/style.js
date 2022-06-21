import styled, { keyframes } from "styled-components";

const appearRigth = keyframes`
from{
  opacity: 0;
  transform: translateX(50px);
}

to{
  opacity: 1;
  transform: translateX(0px)
}
`;

export const Saudation = styled.div`
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  gap: 20px;

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    animation: ${appearRigth} 1.5s;
    background-color: ${(props) => props.theme.terciary};
    @media (min-width: 768px) {
      width: 50%;
    }

    p {
      text-align: justify;
      font-size: 1.1rem;
    }
  }

  img {
    background-color: ${(props) => props.theme.secundaryBg};
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`;

export const MailFone = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 20px;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    svg {
      margin-right: 10px;
      transform: translate(0, 3px);
    }
  }
`;

export const InfoContact = styled.section`
  margin-top: 40px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.secundaryBg};
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
