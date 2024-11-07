import React, { ButtonHTMLAttributes } from "react";
import * as S from "./button.style.ts";
//import styled from "styled-components";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: "white" | "blue";
  background: "white" | "skyblue" | "blue";
  radius: string;
  height: string;
  width: string;
}
// interface IInput extends InputHTMLAttributes<HTMLInputElement> {
//   text: string;
// }

function Button({
  children,
  color,
  background,
  radius,
  height,
  width,
}: IButton) {
  return (
    <S.Container width={width}>
      <S.ButtonStyle
        color={color}
        background={background}
        radius={radius}
        height={height}
      >
        {children}
      </S.ButtonStyle>
    </S.Container>
  );
}

export default Button;
