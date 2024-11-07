import styled from 'styled-components';

interface IImage {
  $imgUrl: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div<IImage>`
  width: 140px;
  height: 200px;
  background-color: aliceblue;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
  background-position: center;

  &:hover::after {
    content: '';
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 2px;

  h5 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 10px;
  }
`;

export { Container, ImageContainer, InfoContainer };
