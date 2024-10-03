import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/navbar.jsx";
import * as S from './root-layout.style.js'
import Sidebar from "../components/sidebar/sidebar.jsx";


const RootLayout = () => {
    return (
        <S.Container>
            <Navbar/>
            <main style={{display:'flex', flex: '1'}}>
                <Sidebar/>
                <Outlet/>
            </main>
        </S.Container>
    );
};

export default RootLayout;
