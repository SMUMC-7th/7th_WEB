import * as S from './navbar.style'

const Navbar = () => {
    return (
        <S.Nav>
            <S.StyledLink to={'/'}>CATFLIX</S.StyledLink>
            <S.Buttons style={{display:'flex', gap: '10px'}}>
                <S.Button to={'/login'}>로그인</S.Button>
                <S.Button to={'/signup'} style={{backgroundColor:'#FF1E9D'}}>회원가입</S.Button>
            </S.Buttons>
        </S.Nav>
    );
};

export default Navbar;
