import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const RootLayout = () => {
  return (
    <div className=" m-5">
      <Navbar />
      <div className="flex py-8 px-[15%] gap-10">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
