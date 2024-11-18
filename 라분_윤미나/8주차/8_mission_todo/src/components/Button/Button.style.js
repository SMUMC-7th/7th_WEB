import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;
  background: pink;

  &:hover {
    background: rgb(250, 125, 146);
  }
`;

export default ButtonStyle;
