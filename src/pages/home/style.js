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

    h1 {
      font-style: italic;
      font-weight: 700;
      font-size: 3rem;
      transition: all 0.3s;
      text-shadow: 2px 2px 5px #023e7d, 2px 2px 7px #0466c8;
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
  }

  figure {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BtnSeeMore = styled.button`
  border: none;
`;
