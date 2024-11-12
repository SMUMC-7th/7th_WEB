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
  page: number;
  total_pages: number;
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
    queryKey: ['movies', 'home'],
    queryFn: getMovieData,
    cacheTime: 10000,
    staleTime: 10000,
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
