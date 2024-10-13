import styled from "styled-components"

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const BtnContainer = styled.div`
  width: 280px;
  display: flex;
  gap: 20px;

  button {
    width: 100%;
    height: 30px;
    background-color: #52BCFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
  }
  button:hover {
    background-color: #1cadff;
  }
`

const MovieList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-template-rows: 150px;
  gap: 20px;
  row-gap: 20px;
  padding: 0 20px;
  margin-bottom: 20px;
`

export { MyContainer, BtnContainer, MovieList }