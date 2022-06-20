import styled, { css } from "styled-components";

export const MenuClose = styled.div`
  position: fixed;
  z-index: 9999999999;
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
  @media (min-width: 768px) {
    width: 65px;
    height: 65px;
  }

  &:hover {
    background-color: ${(props) => props.theme.nav.hover};
    transition: 0.3s;
  }

  svg {
    font-size: 2.5rem;
    @media (min-width: 768px) {
      font-size: 2.75rem;
    }
  }
`;

export const MenuOpen = styled.div`
  position: fixed;
  z-index: 9999999999;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.nav.backgroundColor};
  height: 0;
  width: 0;
  padding-top: 60px;
  transition: width 0.3s, height 0.3s;
  display: none;
  justify-content: center;
  border-bottom-left-radius: 100%;
  padding-left: 20px;
  @media (min-width: 768px) {
    padding-top: 80px;
  }

  svg {
    position: fixed;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media (min-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  ul {
    padding-left: 40px;
    li {
      list-style: none;
      font-style: italic;
      font-size: 1.25rem;
      font-weight: 600;
      padding-bottom: 7px;
      cursor: pointer;
      @media (min-width: 768px) {
        font-size: 1.5rem;
      }

      &:hover {
        color: ${(props) => props.theme.nav.hover};
        font-weight: 700;
        transform: translate(7px, 0px);
      }
    }
  }

  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      height: 300px;
      width: 300px;
      transition: width 0.3s, height 0.3s;
      @media (min-width: 768px) {
        width: 400px;
        height: 400px;
      }
    `}
`;
