import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    border-radius: 10px;
  }
  &:hover {
    border: 3px solid gray;
    border-radius: 13px;
  }
`;

export { Container };
