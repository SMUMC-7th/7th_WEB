import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner';
import { MovieList } from '../../components/movieList/MovieList';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../apis/axios-instance';

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

  const getMovieData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${category}?language=ko-kr`
    );
    return data;
  };

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<Movies>({
    queryKey: [`${category}_Movie`],
    queryFn: getMovieData,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  return movies ? <MovieList movies={movies} /> : null;
};

export default CategoryMovieList;
