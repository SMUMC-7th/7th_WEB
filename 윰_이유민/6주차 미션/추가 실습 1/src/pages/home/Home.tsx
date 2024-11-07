import useCustomFetch from '../../hooks/useCustomFetch';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import { MovieList } from '../../components/movieList/MovieList';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface Movies {
  results: Movie[];
}

const HomePage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<Movies>(`/movie/popular?language=ko-kr`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러가 발생했어요!</div>;
  }

  return movies ? <MovieList movies={movies} /> : null;
};

export default HomePage;
