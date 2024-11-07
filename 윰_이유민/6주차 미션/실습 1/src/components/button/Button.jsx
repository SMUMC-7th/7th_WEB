import * as S from './Button.style';

function Button({ onClick, text, id, type = 'button' }) {
  return (
    <S.Button id={id} onClick={onClick} type={type}>
      {text}
    </S.Button>
  );
}

export default Button;
