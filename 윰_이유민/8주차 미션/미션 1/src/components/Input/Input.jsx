import * as S from './Input.style';

const Input = ({ placeholder, value, onChange }) => {
  return (
    <S.Input placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export { Input };
