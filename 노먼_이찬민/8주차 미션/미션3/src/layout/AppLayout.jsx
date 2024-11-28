import * as S from "./AppLayout.style";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "./../components/sidebar/Sidebar";

function AppLayout() {
  // Outlet 위치에 내가 지정한 Router가 작동한다.
  return (
    <S.AppContainer>
      <Navbar />
      <S.MainContainer>
        <S.SideBox>
          <Sidebar />
        </S.SideBox>
        <S.OutletWrapper>
          <Outlet />
        </S.OutletWrapper>
      </S.MainContainer>
    </S.AppContainer>
  );
}

export default AppLayout;
