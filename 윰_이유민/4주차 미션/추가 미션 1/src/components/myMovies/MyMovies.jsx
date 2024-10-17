import useFetchData from '../../hooks/useFetchData';
import { MovieCard } from '../movieCard/MovieCard';
import * as S from '../movieList/MovieList.style';

function MyMovies() {
  const list_id = localStorage.getItem('list_id');
  if (!list_id) {
    return <p>장바구니를 생성해보세요!</p>
  }

  const {
    data: list,
    isLoading,
    isError,
  } = useFetchData(`/list/${list_id}?language=ko`);

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  if (isError) {
    return <div>ERROR</div>;
  }

  return (
    <S.MovieList>
      {list
        ? list.data?.items?.map((movie, _) => (
            <MovieCard key={movie.id} {...movie} />
          ))
        : <p>영화를 추가해보세요!</p>}
    </S.MovieList>
  );
}

export { MyMovies };
