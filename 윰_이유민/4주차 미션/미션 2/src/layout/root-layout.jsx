import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import SideNav from "../components/sideNav/SideNav.jsx"
import * as S from "./root-layout.style.js"

const RootLayout = () => {
    return (
        <S.Container1>
            <Navbar/>
            <S.Container2>
                <SideNav />
                <Outlet/>
            </S.Container2>
        </S.Container1>
    );
};

export default RootLayout;
