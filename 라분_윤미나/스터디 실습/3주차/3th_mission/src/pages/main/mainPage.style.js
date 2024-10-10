import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 30px;
    width: 150px;
    height: 30px;
    text-align: center;

    text-decoration: none;

    border-radius: 15px;
    border: none;
    background-color: rgb(109, 0, 51);
    color: white;

    &:hover {
      background-color: rgb(63, 0, 29);
    }
  }
`;

const ContainerBTN = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;
export { Container, ContainerBTN };
