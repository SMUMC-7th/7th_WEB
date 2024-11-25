import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 28px;
`;

const AlbumImg = styled.img`
  width: 100px;
  height: 100px;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;

  p {
    color: #333333;
  }
`;

const Price = styled.p`
  color: gray;
`;

const CountContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }

  p {
    font-size: 16px;
  }
`;

export { Container, AlbumImg, TextContainer, Info, Price, CountContainer };
