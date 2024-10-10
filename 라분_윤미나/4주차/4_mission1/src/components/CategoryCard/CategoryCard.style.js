import styled from "styled-components";

const Container = styled.article`
  position: relative;
  img {
    width: 300px;
    height: 170px;
    border-radius: 10px;
  }

  p {
    position: absolute;
    left: 5px;
    bottom: 20px;

    border-radius: 5px;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default Container;
