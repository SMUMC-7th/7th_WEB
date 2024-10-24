import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 200px;
  height: 350px;
  &:hover {
    filter: brightness(0.7);
  }
`
const Title = styled.div`
  color: white;
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Release = styled.div`
  color: white;
  font-size: 10px;
`
export {Container, Title, Release};