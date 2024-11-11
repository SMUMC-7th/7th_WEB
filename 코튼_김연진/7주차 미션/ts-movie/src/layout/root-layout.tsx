import * as S from './root-layout.style';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
        <S.Container>
            <Navbar></Navbar>
            <S.Main>
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </S.Main>
        </S.Container>
    );
};

export default RootLayout;
