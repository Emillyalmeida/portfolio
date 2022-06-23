import styled from "styled-components";

export const Btn = styled.button`
  position: fixed;
  z-index: 9999999999;
  bottom: 10px;
  right: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.color};
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;
