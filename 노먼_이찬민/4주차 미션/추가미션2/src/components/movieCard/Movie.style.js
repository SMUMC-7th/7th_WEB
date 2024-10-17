import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  height: 250px;
  position: relative;
  border-radius: 10px;
  color: white;
  font-size: 0.8rem;
  img {
    border-radius: 10px;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  &:hover {
    background-color: #2f2f2f;
    color: white;
    border: #2f2f2f;
    cursor: pointer;
  }
`;

const BackDrop = styled.div`
  width: 120px;
  height: 80%; // 200px 의 80%
  background-color: black;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const Title = styled.p`
  /* display: flex; */
  /* flex-wrap: wrap; */
  word-break: keep-all;
`;

const Date = styled.p`
  font-size: 0.5rem;
`;

export { Container, BackDrop, Title, Date };
