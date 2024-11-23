import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80vh;
  margin: 50px;
  padding: 30px;
  background-color: aliceblue;
  border-radius: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  gap: 5px;

  input {
    width: 160px;
    height: 25px;
    border: none;
    border-radius: 10px;
    padding-left: 5px;
    cursor: pointer;
  }

  button {
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export { Container, SearchBox };
