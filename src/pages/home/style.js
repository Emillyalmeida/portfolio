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
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
  background-color: ${(props) => props.theme.secundaryBg};
`;

export const MySkills = styled.div``;
