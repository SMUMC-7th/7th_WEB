import * as S from './root-layout.style';
import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
        <S.Container>
            <Navbar></Navbar>
            <S.Main>
                <Outlet></Outlet>
            </S.Main>
        </S.Container>
    );
};

export default RootLayout;
