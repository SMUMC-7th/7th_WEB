import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 8vh;
  background-color: #131517;
`;

const Logo = styled.div`
  font-size: 15px;
  padding: 15px;

  a {
    color: #f2085a;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Button = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;

  a {
    border: none;
    border-radius: 5px;
    padding: 8px;
    background-color: #131517;
    color: white;

    font-size: 15px;
    text-decoration: none;

    &:hover {
      background-color: #f2085a;
    }
  }
`;

export { Container, Logo, Button };
