import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px
  margin: 5px;
`

export {Container}