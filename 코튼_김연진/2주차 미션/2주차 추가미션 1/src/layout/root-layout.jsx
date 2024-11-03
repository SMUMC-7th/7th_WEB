import {Outlet} from "react-router-dom";
import Header from "../components/Header/header.jsx";
import * as S from './root-layout.style.js'
import Footer from "../components/Footer/footer.jsx"
import Icon from "../components/Icon/icon.jsx"

const RootLayout = () => {
    return (
        <S.Container>
            <Header/>
            <main style={{display:'flex', flex: '1'}}>
                <Outlet/>
            </main>
            <Icon></Icon>
            <Footer></Footer>
        </S.Container>
    );
};

export default RootLayout;
