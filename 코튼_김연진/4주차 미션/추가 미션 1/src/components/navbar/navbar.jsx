import * as S from './navbar.style';
import TokenButton from '../tokenBtn/tokenBtn';
import SessionButton from '../sessionBtn/sessionBtn';

const Navbar = () => {
    return (
        <S.Container>
            <S.Logo>영화 장바구니 만들기</S.Logo>
            <S.Buttons>
                <TokenButton></TokenButton>
                <SessionButton></SessionButton>
            </S.Buttons>
        </S.Container>
    );
};

export default Navbar;
