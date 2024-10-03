import styled from 'styled-components';

const Container = styled.article`
  width: 430px;
  height: 430px;

  gap: 20px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
`;

export default Container;
