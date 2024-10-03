import React from "react";
import { styled } from "styled-components";

const MyButton = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.text === "할 일 등록") {
      return "#fff3cd";
    } else if (props.text === "삭제") {
      return "#ff9676";
    } else if (props.text === "수정 진행") {
      return "#d3ff81";
    } else if (props.text === "수정 완료") {
      return "#55ff58";
    }
  }};
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  margin: 10px;
  padding: 10px;
`;

function Button(props) {
  const { text, onClick } = props;
  return (
    <MyButton text={text} onClick={onClick}>
      {text}
    </MyButton>
  );
}

export default Button;
