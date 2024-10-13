import * as S from "./Navbar.style"

function navBar() {
  return (
    <S.Container>
      <h3>영화 장바구니 망둥기</h3>
      <S.BtnContainer>
        <button onClick={() => handleGetToken()}>token</button>
        <button>session</button>
      </S.BtnContainer>
    </S.Container>
  )
}

export default navBar