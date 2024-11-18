import * as S from './Layout.style';
import { Outlet } from 'react-router-dom';
import Nav from '../components/nav/nav';
const Layout = () => {
    return (
        <S.Container>
            <Nav></Nav>
            <Outlet />
        </S.Container>
    );
};

export default Layout;
