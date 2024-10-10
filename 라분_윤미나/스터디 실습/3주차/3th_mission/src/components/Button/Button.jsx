import * as S from "./Button.style";

const Button = (props) => {
  const { onClick, text } = props;
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default Button;
