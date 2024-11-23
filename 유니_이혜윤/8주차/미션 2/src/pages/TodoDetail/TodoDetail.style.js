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

  h3,
  p {
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
  }

  button {
    border: none;
    border-radius: 20px;
    width: 50px;
    height: 30px;
    margin: 10px;
  }
`;

const DetailEdit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  input,
  textarea {
    border: none;
    width: 300px;
    padding: 20px;
    border-radius: 20px;
  }

  button {
    border: none;
    border-radius: 20px;
    width: 50px;
    height: 30px;
    margin: 10px;
  }
`;

export { Container, DetailEdit };
