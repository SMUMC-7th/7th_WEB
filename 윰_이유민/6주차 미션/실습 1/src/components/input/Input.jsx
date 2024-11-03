import * as S from './Input.style';

function Input({ value, onChange, defaultValue, type = 'text' }) {
  return <S.Input type={type} value={value} defaultValue={defaultValue} onChange={onChange} />;
}

export default Input;
