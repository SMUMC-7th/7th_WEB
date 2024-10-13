import styled from 'styled-components';

const Container = styled.div`
  width: 90px;
  height: 150px;
  border: 2px solid gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 87px;
    height: 120px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
  }

  p {
    font-size: 8px;
    width: 70px;
    height: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 10px;
    white-space: nowrap;
  }
`


export { Container }