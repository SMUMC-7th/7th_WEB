import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  padding-top: 70px;

  h1 {
    margin-bottom: 30px;
  }

  input {
    width: 150px;
    height: 30px;
    margin-right: 20px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
  }

  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const TodoContainer = styled.div`
  display: flex;

  margin-top: 30px;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    padding-bottom: 10px;
  }
`;

const Content = styled.div`
  width: 200px;
  height: 60px;

  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 30px;
    height: 20px;
    font-size: 10px;
    border-radius: 10px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  h5 {
    padding-bottom: 3px;
  }

  input {
    font-size: 12px;
    width: 80px;
    height: 10px;
  }

  p {
    font-size: 12px;
  }
`;

const Button = styled.div`
  button {
    margin-left: 5px;
  }
`;

export { Container, TodoContainer, Content, Todo, Text, Button };
