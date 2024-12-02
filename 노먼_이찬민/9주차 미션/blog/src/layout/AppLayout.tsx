import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideModal from "./../components/SideModal";

function AppLayout() {
  // Outlet 위치에 내가 지정한 Router가 작동한다.
  return (
    <div className="min-w-full min-h-[100vh] max-h-[100vh] flex-col flex-center">
      <Header />
      <SideModal />
      <div className="min-w-full min-h-[90vh] flex-col flex-center overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
