import styled from "styled-components";

export const Btn = styled.button`
  position: fixed;
  z-index: 9999999999;
  top: 95vh;
  right: 10px;
  width: 26px;
  height: 22px;
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.textColor};
  border: none;
  border-radius: 5px;
`;
