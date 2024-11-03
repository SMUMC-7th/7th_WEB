import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  background-color: #1e1f23;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;

  padding: 20px;

  h2 {
    color: white;
  }
`;

const Button = styled.div`
  button {
    width: 70px;
    border: none;
    border-radius: 10px;
    background-color: #118edc;
    color: white;

    padding: 10px;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #1e1f23;

  padding-bottom: 50px;
`;

export { Container, Header, Button, Content };
