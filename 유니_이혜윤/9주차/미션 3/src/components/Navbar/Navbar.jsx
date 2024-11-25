import * as S from "./Navbar.style";
import { LuShoppingBag } from "react-icons/lu";
import useCartStore from "../../store/useCartStore";

const Navbar = () => {
  const { amount } = useCartStore();

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
