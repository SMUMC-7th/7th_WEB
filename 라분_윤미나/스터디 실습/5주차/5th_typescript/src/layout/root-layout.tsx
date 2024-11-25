import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/NavBar";

const RootLayout = () => {
  return (
    <div className=" m-5">
      <Navbar />
      <div className="my-8 mr-[5%]">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
