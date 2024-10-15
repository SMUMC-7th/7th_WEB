import { axiosInstance } from "../../apis/axios-instance";
import useFetchData from "../../hooks/useFetchData"
import { useRequestApi } from "../../hooks/useRequestApi";
import { MovieCard } from "../movieCard/MovieCard";
import * as S from "./MovieList.style"

function MovieList({ onAddMovie }) {
  // 영화 목록 (popular) 불러오기
  const {data: movies, isLoading, isError} = useFetchData(`/movie/popular?language=ko&page=1`)

  // 영화 카드 선택 시 마이 리스트에 추가하기
  const { handleRequest, isLoading: addMovieLoading, isError: addMovieError } = useRequestApi();

  if (isLoading) {
    return <div>로딩 중..</div>
  }

  if (isError) {
    return <div>😥영화 목록 불러오는 데 에러가 발생했어요😥</div>
  }

  const handleAddMovie = async (movie) => {
    handleRequest({
      method: "post",
      url: `/list/${localStorage.getItem("list_id")}/add_item?session_id=${localStorage.getItem("session_id")}`,
      body: { media_id: movie.id },
      localKeys: ["list_id", "session_id"],
      onSuccess: () => {
        onAddMovie(movie);
      },
      errorMessage: "영화가 추가되지 않았습니다.",
    });
  };

  return (
    <S.Container>
      <h2>Movies</h2>
      <S.MovieList>
        {movies.data?.results.slice(0, 20).map((movie) => (
          <MovieCard key={movie.id} {...movie} onClickMethod={() => handleAddMovie(movie)} />
        ))}
      </S.MovieList>
    </S.Container>
  );
}

export { MovieList };