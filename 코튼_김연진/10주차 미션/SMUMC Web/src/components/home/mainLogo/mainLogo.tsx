import * as S from './mainLogo.style';
import MainLogoImg from '../../../images/main-light-logo-light.webp';
import MainLogoImgDark from '../../../images/main-logo.webp';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const MainLogo = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <S.Container>
            <S.Main islight={theme}>
                <img
                    src={theme ? MainLogoImg : MainLogoImgDark}
                    alt="Main Logo"
                />
                <S.Texts>
                    <S.Title islight={theme}>
                        U<S.Span $delay={0.05}>n</S.Span>
                        <S.Span $delay={0.1}>i</S.Span>
                        <S.Span $delay={0.15}>v</S.Span>
                        <S.Span $delay={0.2}>e</S.Span>
                        <S.Span $delay={0.25}>r</S.Span>
                        <S.Span $delay={0.3}>s</S.Span>
                        <S.Span $delay={0.35}>i</S.Span>
                        <S.Span $delay={0.4}>t</S.Span>
                        <S.Span $delay={0.45}>y</S.Span>
                    </S.Title>

                    <S.Title islight={theme}>
                        M<S.Span $delay={0.5}>a</S.Span>
                        <S.Span $delay={0.55}>k</S.Span>
                        <S.Span $delay={0.6}>e</S.Span>
                        <S.Span $delay={0.65}>U</S.Span>
                        <S.Span $delay={0.7}>s</S.Span>
                    </S.Title>

                    <S.Title islight={theme}>
                        C<S.Span $delay={0.75}>h</S.Span>
                        <S.Span $delay={0.8}>a</S.Span>
                        <S.Span $delay={0.85}>l</S.Span>
                        <S.Span $delay={0.9}>l</S.Span>
                        <S.Span $delay={0.95}>e</S.Span>
                        <S.Span $delay={1}>n</S.Span>
                        <S.Span $delay={1.05}>g</S.Span>
                        <S.Span $delay={1.1}>e</S.Span>
                    </S.Title>

                    <S.Text islight={theme}>
                        앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리
                    </S.Text>
                </S.Texts>
            </S.Main>
        </S.Container>
    );
};

export default MainLogo;
