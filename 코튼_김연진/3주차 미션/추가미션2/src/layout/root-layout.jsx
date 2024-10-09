import {Outlet} from "react-router-dom";
import Header from "../components/header/header.jsx";
import * as S from './root-layout.style.js'


const RootLayout = () => {
    return (
        <S.Container>
            <Header/>
            <main style={{display:'flex', flex: '1'}}>
                <Outlet/>
            </main>
        </S.Container>
    );
};

export default RootLayout;
