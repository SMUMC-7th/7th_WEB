import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  padding: 20px;

  gap: 5px;

  border-radius: 10px;
  border: none;
  background: pink;
`;

const Button = styled.button`
  margin-top: 15px;
  &:hover {
    background-color: rgb(134, 134, 134);
    color: white;
  }
`;

export { Container, Button };
