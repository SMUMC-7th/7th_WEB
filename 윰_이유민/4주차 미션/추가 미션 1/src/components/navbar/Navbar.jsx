import { FaBasketShopping } from "react-icons/fa6";
import * as S from "./Navbar.style";

function navBar() {
  
  return (
    <S.Container>
      <S.Logo>
        <FaBasketShopping />
        <h3>영화 장바구니 망둥기</h3>
      </S.Logo>
      <S.BtnContainer>
        <button onClick={() => handleGetToken()}>token</button>
        <button>session</button>
      </S.BtnContainer>
    </S.Container>
  )
}

export default navBar