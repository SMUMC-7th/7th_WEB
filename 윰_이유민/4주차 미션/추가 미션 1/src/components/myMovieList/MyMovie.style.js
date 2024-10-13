import styled from "styled-components"

const MyMovieList = styled.div`
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

export { MyMovieList, BtnContainer }