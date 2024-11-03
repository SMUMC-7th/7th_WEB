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
    width: 90px;
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

const MovieWrapper = styled.div`
  margin-top: 30px;
  position: relative;
  cursor: pointer;
  padding: 10px;

  border: 3px solid #2a2d31;
  border-radius: 10px;

  img {
    border-radius: 5px;
    width: 180px;
    height: 275px;
  }

  h3 {
    font-size: 15px;
    padding-top: 3px;
    color: white;
  }

  p {
    font-size: 11px;
    color: #ddd;
  }
`;

export { Container, Button, MovieList, MovieWrapper };
