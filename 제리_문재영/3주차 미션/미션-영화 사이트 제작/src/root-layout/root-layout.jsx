import * as S from "../root-layout/root-layout.style"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return(
        <S.Container>
            <Navbar/>
            <S.Main>
                <Sidebar/>
                <Outlet/>
            </S.Main>
        </S.Container>
    )
}

export default RootLayout;