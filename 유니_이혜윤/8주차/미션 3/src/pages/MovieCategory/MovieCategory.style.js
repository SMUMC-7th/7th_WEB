import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;

  img {
    width: 270px;
    height: 180px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
  }
`;

export { Container, CategoryBox, Box };
