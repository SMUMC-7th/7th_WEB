import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const CategoryContainer = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`

const CategoryItem = styled(Link)`
  width: 240px;
  height: 120px;
  border-radius: 20px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;

  p {
    width: fit-content;
    font-size: 14px;
    padding: 2px 8px;
    margin-left: 8px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.3);
    text-decoration: none;
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;


export { Container, CategoryContainer, CategoryItem }