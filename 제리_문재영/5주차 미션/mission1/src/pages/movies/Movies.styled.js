import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
const Title = styled.h1`
    color: white;
`

const CategoryList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
  margin: 15px;
  background-color: rgb(20, 20, 20);

`
const Movie = styled(Link)`

`

export {Container, Title, CategoryList, Movie}