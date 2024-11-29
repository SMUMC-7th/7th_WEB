import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F8F9FA]">
      <Navbar />
      <div className="flex-1 overflow-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
