import * as S from "./Button.style";

const Button = (props) => {
  const { text } = props;
  return <S.Button>{text}</S.Button>;
};

export default Button;
