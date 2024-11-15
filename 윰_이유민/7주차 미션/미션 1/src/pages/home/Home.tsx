import { useQuery } from '@tanstack/react-query';
import { MovieList } from '../../components/movieList/MovieList';
import { axiosInstance } from '../../apis/axios-instance';
import { CardSkeletonList } from '../../components/movieCard/skeleton/CardSkeletonList';

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
  const getMovieData = async () => {
    const { data } = await axiosInstance.get('/movie/popular?language=ko-kr');
    return data;
  };

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<Movies>({
    queryKey: ['home'],
    queryFn: getMovieData,
  });

  if (isLoading) {
    return <CardSkeletonList number={20} />;
  }

  if (isError) {
    return <div>에러가 발생했어요!</div>;
  }

  return movies ? <MovieList movies={movies} /> : null;
};

export default HomePage;
