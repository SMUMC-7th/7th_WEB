import React, { ButtonHTMLAttributes } from "react";

// ReactNode type 사용하면, 어떤 타입도 가능하다 !!
// PropsWithChildren은 children 생략가능

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  borderRadius?: string;
}

function Button({ children, color, borderRadius, ...props }: IButton) {
  return (
    <button {...props} style={{ color: color, borderRadius: borderRadius }}>
      {children}
    </button>
  );
}

export default Button;
