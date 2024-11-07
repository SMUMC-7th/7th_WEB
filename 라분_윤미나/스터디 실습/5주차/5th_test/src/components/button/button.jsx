import * as S from "./button.style";
import styled from "styled-components";

const Button = () => {
  return (
    <S.Container>
      <Butotn2 color="red">123</Butotn2>
    </S.Container>
  );
};

export default Button;

const Butotn2 = styled.button`
  color: ${(props) => props.color};
`;
