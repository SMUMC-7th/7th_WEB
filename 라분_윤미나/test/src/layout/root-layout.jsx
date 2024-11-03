import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

const RootLayout = () => {
  return (
    <div style={{ margin: "0 15%" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
