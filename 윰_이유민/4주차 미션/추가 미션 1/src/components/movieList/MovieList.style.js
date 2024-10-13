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
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(130px, 1fr));
  gap: 20px;
`

export { Container, MovieList }