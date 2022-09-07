import styled from "styled-components";

export const LiCard = styled.li`
  width: 280px;
  height: 210px;
  border-radius: 10px;
  list-style: none;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    width: 300px;
  }

  img {
    width: 280px;
    height: 210px;
    border-radius: 10px;
    @media (min-width: 768px) {
      width: 300px;
    }
  }

  > div {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${(props) => props.theme.terciary};
    transition: opacity 0.6s;
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

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      color: ${(props) => props.theme.color};
      opacity: 0;
      transition: opacity 0.4s;

      h3 {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 2.1rem;
        text-align: center;
      }

      div {
        display: flex;
        width: 100%;
        justify-content: space-around;

        a {
          color: ${(props) => props.theme.color};

          svg {
            font-size: 2rem;
          }
          &:hover {
            opacity: 0.75;
          }
        }

        button {
          border: none;
          color: ${(props) => props.theme.color};
          background-color: transparent;
          font-size: 2rem;

          &:hover {
            opacity: 0.75;
          }
        }
      }
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
