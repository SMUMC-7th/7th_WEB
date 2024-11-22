import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid pink;
  border-radius: 10px;
`;

const Button = styled.button`
  border-radius: 10px;
  border: none;
  padding: 20px;
`;

const TodoContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export { Form, Input, Button, Container, TodoContainer };
