import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  z-index: 1400;
`;

export const MSection = styled.div`
  width: 90%;
  max-width: 900px;
  height: auto;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.nav.backgroundColor};
  padding: 10px;

  main {
    display: flex;
    gap: 15px;

    section {
      display: flex;
      flex-direction: column;
    }
  }
`;
