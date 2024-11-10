import styled from "styled-components";

const H3 = styled.h3`
  color: white;
  margin: 10px;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Input = styled.input`
  width: 400px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 10px;
`;
const ErrorText = styled.p`
  color: red;
  margin: 5px;
  font-size: 12px;
`;

const Button = styled.button`
  width: 400px;
  background-color: rgb(255, 0, 119);
  color: white;
`;
export { H3, Container, Input, ErrorText, Button };
