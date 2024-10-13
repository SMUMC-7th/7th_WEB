import useFetchData from "../../hooks/useFetchData.js";
import { CreateListBtn } from "../buttons/CreateListBtn.jsx"
import { DeleteBtn } from "../buttons/DeleteBtn.jsx"
import { GetListBtn } from "../buttons/GetListBtn.jsx"
import { MovieCard } from "../movieCard/MovieCard.jsx";
import * as S from "./MyMovieContainer.style.js"

function MyMovieContainer({ myMovies }) {
  const list_id = localStorage.getItem('list_id');

  const {
    data: list,
    isLoading,
    isError,
  } = useFetchData( list_id ? `/list/${list_id}?language=ko` : null);

  return (
    <S.MyContainer>
      <h2>MY Movie List</h2>
      <S.BtnContainer>
        <CreateListBtn />
        <GetListBtn />
        <DeleteBtn />
      </S.BtnContainer>
      {!list_id ? (
        <p>장바구니를 생성해보세요!</p>
      ) : isLoading ? (
        <div>로딩중!</div>
      ) : isError ? (
        <div>ERROR</div>
      ) : (
        <S.MovieList>
          {list?.data?.items?.length > 0 ? (
            list.data.items.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))
          ) : (
            <></>
          )}
        </S.MovieList>
      )}
    </S.MyContainer>
  )
}

export { MyMovieContainer }