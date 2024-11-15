import styled from 'styled-components';

interface Img {
  $img: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PosterContainer = styled.div<Img>`
  width: 100%;
  height: 340px;
  background-image: url(${(props) => props.$img});
  background-position: center;
  background-size: cover;
  border-radius: 14px;
  position: relative;
`;

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: absolute;
  background: linear-gradient(to right, rgb(0, 0, 0, 0.9), transparent);

  h2,
  h4,
  p {
    width: 500px;
    text-align: justify;
    margin: 0 0 10px 20px;
  }
  h4 {
    font-style: italic;
  }
  p {
    font-size: 14px;
  }
`;

export { Container, PosterContainer, DetailContainer };
