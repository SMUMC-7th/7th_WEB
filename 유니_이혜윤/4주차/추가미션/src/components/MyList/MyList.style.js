import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #1e1f23;

  padding-top: 30px;
`;

const Button = styled.div`
  gap: 20px;
  button {
    width: 70px;
    border: none;
    border-radius: 10px;
    background-color: #118edc;
    color: white;

    padding: 10px;
    margin: 20px;
    cursor: pointer;

    &:hover {
      transform: scale(0.9);
    }
  }
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export { Container, Button, MovieList };
