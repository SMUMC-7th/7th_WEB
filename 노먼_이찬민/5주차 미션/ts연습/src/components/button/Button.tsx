import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export enum ButtonColor {
  WHITE = "white",
  SKYBLUE = "skyblue",
  BLUE = "blue",
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColor;
  // onClick: () => void;
  bcg: string;
  fontSize: string;
  borderRadius: string;
}
// { bcg, textColor, fontSize, borderRadius, content, size }
function Button({
  children,
  color,
  bcg,
  fontSize,
  borderRadius,
  ...props
}: IButton) {
  return (
    <button
      {...props}
      style={{
        color: color,
        backgroundColor: bcg,
        fontSize: fontSize,
        borderRadius: borderRadius,
      }}
    >
      {children}
    </button>
  );
}

export default { Button, ButtonColor };
