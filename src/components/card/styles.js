import styled from "styled-components";

export const LiCard = styled.li`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  list-style: none;
  position: relative;
  cursor: pointer;

  img {
    width: 250px;
    height: 200px;
    border-radius: 10px;
  }

  > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${(props) => props.theme.card.backgroundColor};
    transition: opacity 0.5s;
    border-radius: 8px;
  }

  section {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      background-color: ${(props) => props.theme.terciary};
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.6s;
    }
  }

  &:hover {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0.75;
    }
    > section {
      div {
        opacity: 1;
      }
    }
  }
`;
