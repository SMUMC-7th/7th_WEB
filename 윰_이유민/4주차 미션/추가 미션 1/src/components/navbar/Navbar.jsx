import { CreateSessionBtn } from "../buttons/CreateSessionBtn";
import { GetTokenBtn } from "../buttons/GetTokenBtn";
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
        <GetTokenBtn />
        <CreateSessionBtn />
      </S.BtnContainer>
    </S.Container>
  )
}

export default navBar