import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArtistBox = styled.div`
  width: 80%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  top: 20vh;

  div {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
export { Container, ArtistBox };
