import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import * as R from "./root-layout.style";

const RootLayout = () => {
  return (
    <R.LayoutContainer>
      <R.NavbarWrapper>
        <Navbar />
      </R.NavbarWrapper>
      <R.MainWrapper>
        <R.SidebarWrapper>
          <Sidebar />
        </R.SidebarWrapper>
        <R.ContentWrapper>
          <Outlet />
        </R.ContentWrapper>
      </R.MainWrapper>
    </R.LayoutContainer>
  );
};

export default RootLayout;
