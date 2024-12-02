import * as S from './navbar.style';
import Logo from '../../../images/main-light-logo-light.webp';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };
    return (
        <S.Container islight={theme}>
            <S.Logo to={'/'} islight={theme}>
                <img src={Logo} alt="Logo" />
                SMUMC
            </S.Logo>
            <S.Buttons>
                <S.Button to={'/projects'} islight={theme}>
                    PROJECTS
                </S.Button>
                <S.Button to={'/members'} islight={theme}>
                    MEMBERS
                </S.Button>
                <S.Button to={'/notice'} islight={theme}>
                    NOTICE
                </S.Button>
                {theme ? (
                    <S.Dark onClick={handleTheme} />
                ) : (
                    <S.Light onClick={handleTheme} />
                )}
            </S.Buttons>
        </S.Container>
    );
};

export default Navbar;
