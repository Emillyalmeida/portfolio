import styled from "styled-components";

export const Hobbies = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;
  gap: 20px;
`;

export const InfoHobbies = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;

  img {
    width: 300px;
    height: fit-content;
    background-color: white;
    border-radius: 10px;
  }

  > div {
    width: 40%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
      text-align: justify;
    }
  }
`;
