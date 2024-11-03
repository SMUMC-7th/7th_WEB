import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid gray;
  border-radius: 10px;
  width: 100px;
  height: 300px;
  &:hover{
    cursor: pointer;
    filter: brightness(0.7);
  }

`
const Title = styled.p`
    color: white;
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
`
const Img = styled.img`
  width: 100px;
  height: 300px;
  border-radius: 10px;
`
export {Container, Title, Img}
