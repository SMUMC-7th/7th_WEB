import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px 0;
`;

const TodoList = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 5px 0;

  p {
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};

  button {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 10px;
    background-color: #e8f1ff;
    color: #888;
    font-size: 15px;
    cursor: pointer;
  }
`;

export { Container, TodoList };
