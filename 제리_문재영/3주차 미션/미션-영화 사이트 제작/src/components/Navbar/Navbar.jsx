import * as S from './Navbar.style'

const Navbar = () => {
    return (
        <S.Nav>
            <S.Logo to = {'/'}>MOONCHA</S.Logo>
            <div>
                <S.Btn to = {'/login'}>로그인</S.Btn>
                <S.Btn to = {'/signup'}>회원가입</S.Btn>
            </div>
        </S.Nav>

    )
}
export default Navbar;