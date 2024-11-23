import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  background-color: black;
`;

const ButtonStyle = styled.div`
  margin-top: 20px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 10px;
    border: none;
    border-radius: 10px;

    width: 30px;
    height: 20px;
    font-size: 12px;

    cursor: pointer;
    background-color: #888;
    color: white;

    &:hover {
      background-color: #f2085a;
    }
  }

  span {
    font-size: 15px;
    font-weight: bold;
  }
`;

export { Container, ButtonStyle };
