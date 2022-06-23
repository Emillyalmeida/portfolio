import styled from "styled-components";

export const ListUl = styled.ul`
  width: 90%;
  display: grid;
  align-items: center;
  justify-content: space-evenly;
  grid-template-columns: auto;
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
  }
  gap: 10px;
  padding: 50px 20px;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  margin: 0;
  font-size: 4em;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 50px;

  div {
    backdrop-filter: blur(4px);
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      padding-top: 30px;
      padding-left: 20px;
      font-size: 3.5rem;
      font-weight: 700;
      text-shadow: -3px 2px 4px ${(props) => props.theme.backgroundColor};
    }
  }
`;
