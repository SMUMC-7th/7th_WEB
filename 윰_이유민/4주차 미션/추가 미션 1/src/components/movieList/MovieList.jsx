import { axiosInstance } from "../../apis/axios-instance";
import useFetchData from "../../hooks/useFetchData"
import { useRequestApi } from "../../hooks/useRequestApi";
import { MovieCard } from "../movieCard/MovieCard";
import * as S from "./MovieList.style"

function MovieList() {
  // 영화 목록 (popular) 불러오기
  const {data: movies, isLoading, isError} = useFetchData(`/movie/popular?language=ko&page=1`)

  // 영화 카드 선택 시 마이 리스트에 추가하기
  const { handleRequest, isLoading: requestLoading, isError: requestError } = useRequestApi();

  if (isLoading) {
    return <div>로딩 중..</div>
  }

  if (isError) {
    return <div>에러 발생ㅡ..ㅡ</div>
  }

  // 영화 카드 선택 시 마이 리스트에 추가하기
  const handleAddMovie = async (id) => {
    handleRequest({
      method: "post",
      url: `/list/${localStorage.getItem("list_id")}/add_item?session_id=${localStorage.getItem("session_id")}`,
      body: { media_id: id },
      localKeys: ["list_id", "session_id"],
      onSuccess: (data) => {
        console.log(data);
      },
      errorMessage: "영화가 리스트에 추가되지 않았어요"
    });

  };

  return (
    <S.Container>
      <h2>Movies</h2>
      <S.MovieList>
        {movies.data?.results.slice(0,20).map((movie, _) =>
          <MovieCard key={movie.id} {...movie}  onClickMethod={() => handleAddMovie(movie.id)} />
        )}
      </S.MovieList>
    </S.Container>
  )
}

export { MovieList }