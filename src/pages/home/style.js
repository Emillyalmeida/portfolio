import styled from "styled-components";
import circle from "../../assets/circle.svg";

export const IAm = styled.section`
  width: 100%;
  padding-top: 100px;
  display: flex;
  height: 100vh;
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

    img {
      width: 200px;
      height: 220px;
      border-radius: 50%;
    }
  }
`;

export const InfoMe = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  background-color: ${(props) => props.theme.terciary};
`;

export const MySkills = styled.div`
  width: 70%;
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  margin-top: 30px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.secundaryBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  gap: 20px;

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    li {
      padding-top: 7px;
    }
  }
`;

export const MyPortfolio = styled.div`
  margin-top: 30px;
  height: 500px;
`;

export const AboutMe = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${(props) => props.theme.terciary};

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  figure {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnSeeMore = styled.button`
  background-color: transparent;
  width: 100px;
  height: 35px;
  font-weight: 700;
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
  padding-top: 30px;
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

    svg {
      font-size: 3rem;
      cursor: pointer;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.terciary};
`;
