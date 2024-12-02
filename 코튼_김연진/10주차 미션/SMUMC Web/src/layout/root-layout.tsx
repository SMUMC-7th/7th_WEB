import { Outlet } from 'react-router-dom';
import Navbar from '../components/share/navbar/navbar.js';
import * as S from './root-layout.style.js';
import Footer from '../components/share/footer/footer.js';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';
import ScrollToTop from '../components/share/scrollToTop.tsx';
const RootLayout = () => {
    const { theme } = useContext(ThemeContext);
    const islight = theme;
    return (
        <>
            <ScrollToTop />
            <S.Container islight={islight}>
                <Navbar />
                <S.Main islight={islight}>
                    <Outlet />
                </S.Main>
                <Footer />
            </S.Container>
        </>
    );
};

export default RootLayout;
