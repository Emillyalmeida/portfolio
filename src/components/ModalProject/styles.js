import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: auto;
  min-height: 750px;
  overflow: scroll;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  box-sizing: border-box;
  z-index: 1400;
`;

export const MSection = styled.div`
  width: 90%;
  margin-top: 10vh;
  margin-bottom: 20vh;
  position: relative;
  max-width: 1200px;
  height: auto;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.nav.backgroundColor};
  padding: 25px 10px;

  main {
    position: relative;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    > button {
      position: absolute;
      top: 95%;
      right: -10px;
      padding: 0 10px 3px 10px;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      border-color: ${(props) => props.theme.button.backgroundColor};
      font-weight: bold;
      font-size: 1.5rem;
      background-color: ${(props) => props.theme.button.textColor};
      color: ${(props) => props.theme.button.backgroundColor};

      &:hover {
        color: ${(props) => props.theme.button.textColor};
        background-color: ${(props) => props.theme.button.backgroundColor};
        transition: 0.3s;
      }
    }

    img {
      width: 50%;
      min-width: 300px;
      height: 250px;
      @media (min-width: 768px) {
        padding: 0 15px;
        width: 50%;
        height: 290px;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      width: 90%;
      gap: 15px;

      @media (min-width: 768px) {
        padding: 0 15px;
        width: 50%;
      }

      header {
        h2 {
          padding: 0;
        }
      }
      div {
        p {
          text-align: justify;
        }

        ul {
          @media (max-height: 700px) {
            display: none;
          }
          display: flex;
          flex: wrap;
        }
        li {
          list-style: none;
          width: 48%;
          font-size: 0.9rem;
        }
      }

      footer {
        button + button {
          margin-left: 20px;
        }
        button {
          border: none;
          width: 120px;
          border-radius: 7px;
          background-color: ${(props) => props.theme.button.backgroundColor};
          color: ${(props) => props.theme.button.textColor};
          height: 35px;
          font-weight: 700;
          font-size: 1.1rem;

          &:hover {
            background-color: ${(props) => props.theme.button.hover};
            transition: 0.3s;
          }
        }
      }
    }
  }
`;
