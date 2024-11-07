import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.jsx';
import MovieCard from '../../components/movieCard/MovieCard.jsx';
import useCustomFetch from '../../hooks/useCustomFetch.js';
import { MovieList } from '../../components/movieList/MovieList.jsx';

const CategoryMovieList = () => {
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

  return <MovieList movies={movies} />;
};

export default CategoryMovieList;
