import { useSelector } from "react-redux";
import * as S from "./Navbar.style";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <S.Container>
      <h1>PLAYLIST 🎶</h1>
      <S.CartBox>
        <LuShoppingBag />
        <p>{amount}</p>
      </S.CartBox>
    </S.Container>
  );
};

export default Navbar;
