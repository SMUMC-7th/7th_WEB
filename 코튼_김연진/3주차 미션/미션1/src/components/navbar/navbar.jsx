import * as S from './navbar.style'

const Navbar = () => {
    return (
        <S.Nav>
            <S.StyledLink to={'/'}>CATFLIX</S.StyledLink>
            <S.Buttons>
                <S.Button to={'/login'}>로그인</S.Button>
                <S.Button to={'/signup'} style={{backgroundColor:'#FF1E9D'}}>회원가입</S.Button> 
                {/* Button 컴포넌트를 한 번에 만들고 색상을 다르게 주고 싶어서 이런 식으로 작성했는데... 다른 더 좋은 방법이 있을까요... */}
                {/* 컴포넌트를 그냥 나눠버리는게 좋을까요 Button1, Button2 이런 식으로... */}
            </S.Buttons>
        </S.Nav>
    );
};

export default Navbar;
