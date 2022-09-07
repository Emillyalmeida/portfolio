import styled from "styled-components";

export const SectionProject = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;
  gap: 25px;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    padding-left: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 30px;

    img {
      width: 270px;
      @media (min-width: 768px) {
        width: 75%;
      }
    }

    p {
      font-size: 1.25rem;
      text-align: center;
    }

    ul {
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
      gap: 25px;
      flex-wrap: wrap;
      list-style: none;
      font-size: 1.5rem;
      text-shadow: -4px 4px 4px ${(props) => props.theme.secundaryBg};

      li {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      li p {
        font-size: 1.5rem;
      }

      li p:hover {
        font-size: 1.75rem;
      }
    }

    > div {
      display: flex;
      gap: 30px;
      margin-top: 30px;

      button {
        background-color: transparent;
        width: 120px;
        height: 40px;
        font-weight: 700;
        font-size: 1.25rem;
        border: 2px solid transparent;
        border-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.color};

        &:hover {
          width: 140px;
          height: 45px;
          font-size: 1.5rem;
          transition: 0.4s;
        }
      }
    }
  }
`;
