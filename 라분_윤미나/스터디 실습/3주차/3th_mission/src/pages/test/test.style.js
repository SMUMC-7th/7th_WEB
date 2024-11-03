import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;

  button {
    border: none;
  }
`;

const Input = styled.input`
  background-color: white;
  border: none;
  width: 200px;
  height: 25px;
`;

const Button = styled.button`
  border: none;
`;

export { Container, Input, Button };
