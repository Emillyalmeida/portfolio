import styled, { keyframes } from "styled-components";
import circle from "../../assets/circle.svg";

const float = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-30px)
  }

  100%{
    transform: translateY(0px)
  }
`;

const Revealtext = keyframes`

from{
  transform: translateY(20px);
}

to{
  opacity: 1;
  transform: none;
}
`;

export const IAm = styled.section`
  width: 100%;
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    h1 {
      font-style: italic;
      font-weight: 700;
      font-size: 3rem;
      transition: all 0.3s;
      text-align: center;
      text-shadow: 2px 2px 5px #023e7d, 2px 2px 7px #0466c8;
    }
    h2 {
      padding-top: 10px;
      padding-bottom: 30px;
      text-align: center;

      span {
        opacity: 0;
        animation: ${Revealtext} 0.5s forwards;
      }

      .second {
        animation-delay: 1s;
      }

      .terciary {
        animation-delay: 1.5s;
      }

      .last {
        animation-delay: 2s;
      }
    }
  }

  figure {
    background-image: url(${circle});
    background-position: center;
    background-size: contain;
    width: 220px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${float} 5s 2s linear infinite;

    img {
      filter: drop-shadow(2px 4px 6px #121212);
      width: 200px;
      height: 220px;
      border-radius: 50%;
      transform: translateY(0px);
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding-left: 15px;

  div {
    width: 70px;
    height: 70px;
    background-color: ${(props) => props.theme.nav.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    span {
      font-size: 3rem;
      text-align: center;
      font-style: italic;
      margin-bottom: 7px;
    }
  }
`;

export const InfoMe = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 10%;
  gap: 20px;
  background-color: ${(props) => props.theme.terciary};
`;

export const MySkills = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.secundaryBg};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 65px 0;
  gap: 25px;

  h3 {
    font-weight: 700;
    font-size: 1.75rem;
    padding-left: 30px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 25px;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 7px;
      font-size: 1rem;
      gap: 10px;
      font-weight: 600;

      img {
        filter: drop-shadow(2px 4px 6px #121212);
        width: 135px;
        height: 135px;
      }
    }
  }
`;

export const MyPortfolio = styled.div`
  padding: 60px 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  h2 {
    padding-left: 30px;
    font-size: 1.75rem;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    align-self: center;
  }
`;

export const AboutMe = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 60px 20px;
  background-color: ${(props) => props.theme.terciary};

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    @media (min-width: 768px) {
      width: 50%;
    }

    p {
      text-align: justify;
    }
  }

  figure {
    display: none;
    @media (min-width: 768px) {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img {
      background-color: ${(props) => props.theme.secundaryBg};
      width: 270px;
      height: 270px;
      border-radius: 50%;
    }
  }
`;

export const BtnSeeMore = styled.button`
  background-color: transparent;
  width: 150px;
  height: 42px;
  font-weight: 700;
  font-size: 1.2rem;
  border: 2px solid transparent;
  border-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.backgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.button.backgroundColor};
    color: ${(props) => props.theme.button.textColor};
    transition: 0.4s;
  }
`;

export const MyContact = styled.div`
  padding-top: 50px;
  height: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    height: 100px;
    align-items: center;
    gap: 30px;

    a {
      color: ${(props) => props.theme.color};

      &:hover {
        opacity: 0.6;
        transition: opacity 0, 3s;
      }
    }

    svg {
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;
