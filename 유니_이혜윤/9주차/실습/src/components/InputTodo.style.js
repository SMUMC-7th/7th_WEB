import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 450px
  margin: 0 auto;

  h1 {
  padding: 10px 0;}
`;

const TodoDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  font-size: 14px;
  color: #555;
  font-weight: bold;
`;

const TodoInput = styled.div`
  display: flex;
  gap: 10px;

  input {
    border: none;
    border-radius: 10px;
    width: 230px;
    height: 25px;
    padding-left: 10px;
  }

  button {
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: #eee;
    cursor: pointer;
  }
`;

export { Container, TodoDate, TodoInput };
