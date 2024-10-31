import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border: 1px solid white;
    border-radius: 100%;
  }
  h3 {
    color: white;
    margin: 0px;
  }
  p {
    color: rgb(138, 138, 138);
    margin: 0px;
  }
`;

export { Container };
