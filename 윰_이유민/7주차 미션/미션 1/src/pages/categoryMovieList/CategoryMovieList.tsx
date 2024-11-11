import { useParams } from 'react-router-dom';
import { MovieList } from '../../components/movieList/MovieList';
import { useQuery } from '@tanstack/react-query';
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
    return <CardSkeletonList number={20} />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  return movies ? <MovieList movies={movies} /> : null;
};

export default CategoryMovieList;
