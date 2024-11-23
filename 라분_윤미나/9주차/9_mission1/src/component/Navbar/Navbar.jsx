import { CartIcon } from "../../constants/icons";
import * as S from "./Navbar.style";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <S.Nav_Center>
        <h1>UMC PlayList</h1>
        <S.Nav_Container>
          <CartIcon />
          <S.Amount_Container>
            <S.Total_Amount>{amount}</S.Total_Amount>
          </S.Amount_Container>
        </S.Nav_Container>
      </S.Nav_Center>
    </nav>
  );
};

export default NavBar;
