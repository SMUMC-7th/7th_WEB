import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 10px 20px;
    color: white;
  }
`;

const CartBox = styled.div`
  width: 160px;
  font-size: 15px;
  display: flex;
  align-items: center;

  svg {
    width: 30px;
  }
`;

export { Container, CartBox };
