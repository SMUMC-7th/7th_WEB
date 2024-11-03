import MovieCard from '../../components/movieCard/MovieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import { MovieList } from '../../components/movieList/MovieList';

const HomePage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/popular?language=ko-kr`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러가 발생했어요!</div>;
  }

  return <MovieList movies={movies} />;
};

export default HomePage;
