import { axiosInstance } from "../../apis/axios-instance";
import useFetchData from "../../hooks/useFetchData"
import { MovieCard } from "../movieCard/MovieCard";
import * as S from "./MovieList.style"

function MovieList() {
  // 영화 목록 (popular) 불러오기
  const {data: movies, isLoading, isError} = useFetchData(`/movie/popular?language=ko&page=1`)

  if (isLoading) {
    return <div>로딩 중..</div>
  }

  if (isError) {
    return <div>에러 발생ㅡ..ㅡ</div>
  }

  // 영화 카드 선택 시 마이 리스트에 추가하기
  const handleAddMovie = async (id) => {
    const list_id = localStorage.getItem('list_id');
    const session_id = localStorage.getItem('session_id');

    if (!session_id) {
      alert(
        "Session ID가 존재하지 않습니다! 먼저 'session' 버튼을 클릭하여 ID를 받아주세요.",
      );
      return;
    } else if (!list_id) {
      alert(
        "리스트가 존재하지 않습니다! 먼저 '만들기' 버튼을 클릭하여 리스트를 생성하세요.",
      );
    }

    try {
      const response = await axiosInstance.post(
        `/list/${list_id}/add_item?session_id=${session_id}`,
        { media_id: id }
      );
      console.log(response.data);

    } catch (error) {
      console.log(error);
      alert("영화가 리스트에 추가되지 않았어요. error: ", error.message);
    }
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