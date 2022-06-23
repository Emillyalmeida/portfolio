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
  width: 100%;
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
  padding: 50px 20px;
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
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 20px;
  gap: 15px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.terciary};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
  padding: 30px 20px;

  div {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      color: ${(props) => props.theme.color};
    }
    img {
      width: 400px;
      height: 240px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    h3 {
      font-size: 1.5rem;
    }

    input {
      width: 300px;
      height: 40px;
      border-radius: 7px;
      background-color: transparent;
      border-width: 1px;
      border-style: solid;
      border-color: ${(props) => props.theme.color};

      &::placeholder {
        padding-left: 5px;
        color: ${(props) => props.theme.color};
        font-weight: 600;
      }
    }
    textarea {
      width: 300px;
      border-radius: 7px;
      border-color: ${(props) => props.theme.color};
      background-color: transparent;

      &::placeholder {
        padding-top: 6px;
        padding-left: 5px;
        color: ${(props) => props.theme.color};
        font-weight: 600;
      }
    }

    button {
      border: none;
      width: 120px;
      border-radius: 7px;
      background-color: ${(props) => props.theme.button.backgroundColor};
      color: ${(props) => props.theme.button.textColor};
      height: auto;
      font-weight: 700;
      font-size: 1.1rem;
      padding: 5px 10px;
      &:hover {
        background-color: ${(props) => props.theme.button.hover};
        transition: 0.3s;
      }
    }
  }
`;
