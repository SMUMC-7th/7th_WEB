import React from "react";
import { styled } from "styled-components";

const MyButton = styled.button`
  background-color: ${(props) => props.$bcg};
  color: ${(props) => (props.$textColor ? props.$textColor : "black")};
  font-size: ${(props) => props.$fontSize};
  border-radius: ${(props) => props.$borderRadius};
  border: none;
  height: ${(props) =>
    props.$size === "small"
      ? "40px"
      : props.$size === "medium"
      ? "50px"
      : "60px"};
`;

const Button = ({ bcg, textColor, fontSize, borderRadius, content, size }) => {
  return (
    <MyButton
      $bcg={bcg}
      $textColor={textColor}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $size={size}
    >
      {content}
    </MyButton>
  );
};

export default Button;
