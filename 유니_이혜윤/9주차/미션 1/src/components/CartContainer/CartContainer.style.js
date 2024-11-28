import styled from "styled-components";

const Container = styled.div`
  padding: 50px 60px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    font-size: 25px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  font-size: 15px;
`;

const ClearButton = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 25px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
`;

export { Container, Total, ClearButton };
