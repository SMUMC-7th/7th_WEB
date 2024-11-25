import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-auto bg-[#aaa]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
