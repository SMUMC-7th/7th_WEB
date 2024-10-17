import * as S from "./Navbar.style.js";

const Navbar = () => {
    return (
        <S.Nav>
            <S.Logo to="/">YONGCHA</S.Logo>
            <S.BtnContainer>
                <S.Login to="/login">로그인</S.Login>
                <S.Signup to="/signup">회원가입</S.Signup>
            </S.BtnContainer>
        </S.Nav>
    );
};

export default Navbar;
