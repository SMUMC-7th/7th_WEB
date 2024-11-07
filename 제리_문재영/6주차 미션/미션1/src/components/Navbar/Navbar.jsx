import * as S from './Navbar.style'

const Navbar = () => {
    return (
        <S.Nav>
            <S.Logo to = {'/'}>MOONCHA</S.Logo>
            <S.Btns>
                <S.Btn to = {'/login'} color='rgb(20, 20, 20);'>로그인</S.Btn>
                <S.Btn to = {'/signup'}>회원가입</S.Btn>
            </S.Btns>
        </S.Nav>

    )
}
export default Navbar;