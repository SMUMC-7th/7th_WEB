import useFetchData from "../../hooks/useFetchData.js"
import * as S from "./MyMovie.style.js"

function MyMovieList() {
  

  return (
    <S.MyMovieList>
      <h2>MY Movie List</h2>
      <S.BtnContainer>
        <button>만들기</button>
        <button>가져오기</button>
        <button>리스트 삭제</button>
      </S.BtnContainer>
    </S.MyMovieList>
  )
}

export { MyMovieList }