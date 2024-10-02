import styled from 'styled-components';

const Container = styled.article`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(196, 196, 196);

  img {
    width: 100px;
  }
  button {
    width: 120px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    border-radius: 20px;
  }
`;

export default Container;
