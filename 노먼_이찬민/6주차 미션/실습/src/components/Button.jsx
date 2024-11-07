import React from "react";
import { styled } from "styled-components";

const MyButton = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => {
    // if (props.text === "할 일 등록") {
    //   return "#fff3cd";
    // } else if (props.text === "삭제") {
    //   return "#ff9676";
    // } else if (props.text === "수정 진행") {
    //   return "#d3ff81";
    // } else if (props.text === "수정 완료") {
    //   return "#55ff58";
    // }
    return props.bcg; // 그냥 목적 별로 props를 하나씩만 쓰기 (기존 : 내용 + 컬러조작)
  }};
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  margin: 10px;
  padding: 10px;
`;

function Button(props) {
  const { text, onClick, bcg } = props;
  return (
    <MyButton text={text} onClick={onClick} bcg={bcg}>
      {text}
    </MyButton>
  );
}

export default Button;
