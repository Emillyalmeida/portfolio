import styled from "styled-components";

export const Hobbies = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;
  gap: 25px;

  > h2 {
    padding-left: 25px;
    font-size: 1.75rem;
    font-style: italic;
  }
`;

export const InfoHobbies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  }

  img {
    width: 300px;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
  }

  > div {
    width: 90%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (min-width: 768px) {
      width: 45%;
    }

    p {
      text-align: justify;
    }
  }
`;
