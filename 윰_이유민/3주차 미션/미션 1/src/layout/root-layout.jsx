import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import SideNav from "../components/sideNav/SideNav.jsx"
import * as S from "./root-layout.style.js"

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <S.Container>
                <SideNav />
                <Outlet/>
            </S.Container>
        </>
    );
};

export default RootLayout;
