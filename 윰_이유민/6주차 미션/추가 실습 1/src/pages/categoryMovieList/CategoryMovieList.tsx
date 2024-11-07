import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import useCustomFetch from '../../hooks/useCustomFetch';
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

const CategoryMovieList = () => {
  const { category } = useParams();

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<Movies>(`/movie/${category}?language=ko-kr`);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  return movies ? <MovieList movies={movies} /> : null;
};

export default CategoryMovieList;
