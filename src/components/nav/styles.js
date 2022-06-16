import styled from "styled-components";

export const MenuClose = styled.div`
  position: fixed;
  height: 55px;
  width: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 10px;
  right: 10px;
  background-color: ${(props) => props.theme.nav.backgroundColor};

  &:hover {
    background-color: ${(props) => props.theme.nav.hover};
    transition: 0.3s;
  }

  svg {
    font-size: 2.5rem;
  }
`;
