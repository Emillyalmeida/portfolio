import styled from "styled-components";

export const Ancor = styled.a`
  width: fit-content;
  color: ${(props) => props.theme.color};
  text-decoration: none;
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.6;
    transition: opacity 0, 3s;
  }

  svg {
    font-size: 4rem;
  }
`;
