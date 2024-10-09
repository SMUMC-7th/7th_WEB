import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

//import * as S from "./root-layout.style";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
