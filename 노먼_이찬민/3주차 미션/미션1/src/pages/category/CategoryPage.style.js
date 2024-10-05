import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  height: 10%;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = styled.div`
  flex: 1;
  width: 30%;
  min-width: 200px; /* 최소 크기 설정 */
  height: 100px;
  margin: 10px;
  cursor: pointer;
  border-radius: 20px;
  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  span {
    position: relative;
    top: -40px;
    left: 10px;
    background-color: black;
    opacity: 0.6;
    text-align: center;
    border-radius: 4px;
  }
`;

export { Container, Title, Category, CategoryBox };
