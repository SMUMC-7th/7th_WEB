import * as S from './navbar.style'

const Navbar = () => {
    return (
        <S.Nav>
            <S.StyledLink to={'/'}>ToDoList</S.StyledLink>
        </S.Nav>
    );
};

export default Navbar;
