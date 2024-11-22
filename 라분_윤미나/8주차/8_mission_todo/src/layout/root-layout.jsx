import { Link, Outlet } from "react-router-dom";
import * as S from "./root-layout.style";

//import * as S from "./root-layout.style";

const RootLayout = () => {
  return (
    <S.Container>
      <Link to={"/"}>
        <h2>UMC TodoList</h2>
      </Link>
      <Outlet />
    </S.Container>
  );
};

export default RootLayout;
