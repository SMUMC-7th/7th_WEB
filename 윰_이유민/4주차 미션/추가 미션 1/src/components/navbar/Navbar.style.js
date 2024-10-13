import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  top: 0;
`

const BtnContainer = styled.div`
  width: 140px;
  display: flex;
  gap: 20px;

  button {
    width: 100%;
    height: 20px;
    background-color: #52BCFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #1cadff;
  }
`

export { Container, BtnContainer }