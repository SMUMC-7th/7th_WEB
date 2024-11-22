import * as S from './nav.style';

const Nav = () => {
    return (
        <S.Container>
            <S.Logo to={'/'}>연진이의 TodoList</S.Logo>
            <S.Search to={'/search'}>
                <S.SearchIcon></S.SearchIcon>
            </S.Search>
        </S.Container>
    );
};

export default Nav;
