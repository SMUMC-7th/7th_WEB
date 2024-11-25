// variant -> 1. primary: main 색상, 2. secondary: secondary 색상, 3. error: '빨간색

import React, { ButtonHTMLAttributes } from "react";
import cn from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error";
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  children,
  className,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        "py-14 px-28 text-16 font-medium rounded-lg border",
        classes[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

const classes: Record<NonNullable<IButton["variant"]>, string> = {
  primary: "bg-pink-500 border-pink-500 text-white",
  secondary: "bg-gray-200 border-gray-200 text-gray-800",
  error: "bg-red-500 border-red-500 text-white",
};
