import * as S from "./AppLayout.style";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function AppLayout() {
  // Outlet 위치에 내가 지정한 Router가 작동한다.
  return (
    <S.AppContainer>
      <Header />
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
    </S.AppContainer>
  );
}

export default AppLayout;
