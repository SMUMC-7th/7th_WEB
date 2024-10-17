import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
`

const MovieList = styled.div`
  width: 100%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-template-rows: 150px;
  justify-content: center;
  gap: 20px;
  row-gap: 20px;
  padding: 0 20px;
`

export { Container, MovieList }