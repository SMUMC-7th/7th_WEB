import * as S from './footer.style';
import Logo from '../../../images/main-light-logo-light.webp';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <S.Footer>
            <S.Logo to={'/'} islight={theme}>
                <img src={Logo}></img>
                SMUMC
            </S.Logo>
            <S.Buttons islight={theme}>
                <S.Button to={''} islight={theme}>
                    Privacy Policy
                </S.Button>
                <S.ATag href="mailto:dydals3440@gmail.com" islight={theme}>
                    Contact To
                </S.ATag>
            </S.Buttons>
        </S.Footer>
    );
};

export default Footer;
