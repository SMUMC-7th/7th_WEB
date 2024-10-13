import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import * as S from "./root-layout.style.js"

const RootLayout = () => {
    return (
        <S.Container>
            <Navbar/>
            <Outlet/>
        </S.Container>
    );
};

export default RootLayout;
