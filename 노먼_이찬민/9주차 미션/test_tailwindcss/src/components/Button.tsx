// type 1. primary : main 색상
// type 2. secondary :
import cn from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error"; // 옵셔널
  children: React.ReactNode;
}

import React, { Children } from "react";

function Button({
  variant = "primary",
  children,
  className,
  ...props
}: IButton) {
  return (
    <button
      className={(cn("rounded-lg border"), classes["variant"], className)}
      {...props}
    >
      {Children}
    </button>
  );
}

export default Button;

const classes: Record<NonNullable<IButton["variant"]>, string> = {
  primary: "bg-pink-500 border-pink-500",
  secondary: "bg-gray-300 border-gray-300",
  error: "bg-red-500 border-red-500",
};
