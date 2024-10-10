import styled from "styled-components";

const Container = styled.div`
  left: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: white;
`

const Item = styled.a`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: white;
  }

`

export {Container, Item}