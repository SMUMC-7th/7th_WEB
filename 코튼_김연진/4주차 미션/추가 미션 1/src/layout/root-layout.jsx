import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx';
import * as S from './root-layout.style.js';

const RootLayout = () => {
    return (
        <S.Container>
            <Navbar />
            <S.Main>
                <Outlet />
            </S.Main>
        </S.Container>
    );
};

export default RootLayout;
