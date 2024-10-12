import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.jsx';
import MovieCard from '../../components/movieCard/MovieCard.jsx';
import useCustomFetch from '../../hooks/useCustomFetch.js';
import * as S from './MovieList.style.js';

const MoviesPage = () => {
  const { category } = useParams();

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${category}?language=ko-kr`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  return (
    <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </S.Container>
  );
};

export default MoviesPage;
