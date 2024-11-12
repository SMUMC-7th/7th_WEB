import styled from "styled-components";

const TextContainer = styled.div`
  text-align: center;
  margin-top: 30px;
  color: white;
`;

const MovieContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
const PageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-color: rgb(255, 0, 119);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
const TextP = styled.p`
  color: white;
`;
export { TextContainer, MovieContainer, PageContainer, Button, TextP };
