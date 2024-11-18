import ButtonStyle from "./Button.style";

const Button = ({ onClick, btnText, disabled }) => {
  return (
    <ButtonStyle onClick={onClick} disabled={disabled}>
      {btnText}
    </ButtonStyle>
  );
};

export default Button;
