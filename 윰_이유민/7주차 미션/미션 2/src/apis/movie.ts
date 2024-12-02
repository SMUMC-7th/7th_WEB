import { axiosInstance } from './axios-instance';
import { TMovieCategory, TMovieListResponse } from '../types/movie';

interface UseGetMoviesProps {
  category: TMovieCategory;
  pageParam?: number;
}

const getMovieList = async ({
  category,
  pageParam = 1,
}: UseGetMoviesProps): Promise<TMovieListResponse> => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko-kr&page=${pageParam}`
  );
  return data;
};

export { getMovieList };
