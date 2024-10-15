import useFetchData from "../../hooks/useFetchData.js";
import { useRequestApi } from "../../hooks/useRequestApi.js";
import { CreateListBtn } from "../buttons/CreateListBtn.jsx"
import { DeleteBtn } from "../buttons/DeleteBtn.jsx"
import { GetListBtn } from "../buttons/GetListBtn.jsx"
import { MovieCard } from "../movieCard/MovieCard.jsx";
import * as S from "./MyMovieContainer.style.js"

function MyMovieContainer({ myMovies, setMyMovies }) {
  const { handleRequest, isLoading, isError } = useRequestApi();

  const handleDeleteMovie = (movieId) => {
    handleRequest({
      method: "post",
      url: `/list/${localStorage.getItem("list_id")}/remove_item?session_id=${localStorage.getItem("session_id")}`,
      body: { media_id: movieId },
      localKeys: ["list_id", "session_id"],
      onSuccess: () => {
        setMyMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
      },
      errorMessage: "영화를 삭제하는 데 실패했습니다."
    });
  };

  return (
    <S.MyContainer>
      <h2>MY Movie List</h2>
      <S.BtnContainer>
        <CreateListBtn />
        <GetListBtn />
        <DeleteBtn />
      </S.BtnContainer>
      <S.MovieList>
        {myMovies.length > 0 ? (
          myMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} onClickMethod={() => handleDeleteMovie(movie.id)} />
          ))
        ) : (
          <p>영화를 추가해보세요!</p>
        )}
      </S.MovieList>
    </S.MyContainer>
  )
}

export { MyMovieContainer }