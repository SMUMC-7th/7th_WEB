import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  left: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  color: white;
`

const Item = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
  }

  &:visited {
    color: white;
  }

`

export {Container, Item}