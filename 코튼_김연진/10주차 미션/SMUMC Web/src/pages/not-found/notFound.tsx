import * as S from './notFound.style';
import Navbar from '../../components/share/navbar/navbar.tsx';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.tsx';
import ScrollToTop from '../../components/share/scrollToTop.tsx';
const NotFound = () => {
    const { theme } = useContext(ThemeContext);
    const islight = theme;
    return (
        <>
            <ScrollToTop />
            <S.Container islight={islight}>
                <Navbar />
                <S.Main islight={islight}>
                    <S.Text islight={islight}>
                        <S.Span>404</S.Span> | This page could not be found
                    </S.Text>
                </S.Main>
            </S.Container>
        </>
    );
};

export default NotFound;
