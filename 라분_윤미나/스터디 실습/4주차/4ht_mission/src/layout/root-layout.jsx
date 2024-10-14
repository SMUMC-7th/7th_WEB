import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const RootLayout = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default RootLayout;
