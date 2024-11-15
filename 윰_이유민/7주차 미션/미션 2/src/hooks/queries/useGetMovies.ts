import { axiosInstance } from '../../apis/axios-instance';

interface UseGetMoviesProps {
  category: string;
  pageParam: number;
}

const useGetMovies = async ({ category, pageParam }: UseGetMoviesProps) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko-kr&page=${pageParam}`
  );
  return data;
};

export { useGetMovies };
