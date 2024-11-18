import InputStyle from "./input.style";
import { forwardRef } from "react";

const Input = forwardRef(({ onChange, placeholder, ...rest }, ref) => {
  return (
    <InputStyle
      ref={ref}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export default Input;
