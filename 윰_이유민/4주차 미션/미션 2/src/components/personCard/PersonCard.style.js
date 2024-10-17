import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid gray;
    object-fit: cover;
    margin-bottom: 6px;

  }

  p {
    width: 90px;
    font-size: 10px;
    font-weight: lighter;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export { Container }