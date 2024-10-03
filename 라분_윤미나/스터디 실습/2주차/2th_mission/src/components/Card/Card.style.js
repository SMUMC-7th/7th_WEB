import styled from 'styled-components';

const Container = styled.article`
  width: 700px;
  height: 200px;

  border-bottom: 1px solid rgb(196, 196, 196);

  display: flex;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
  }

  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
  h4 {
    margin-bottom: 10px;
  }
  p {
    margin-top: 0;
  }
`;

export { Container };
