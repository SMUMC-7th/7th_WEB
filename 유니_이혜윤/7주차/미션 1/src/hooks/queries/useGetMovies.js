import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?include_adult=false&include_video=false&&language=ko-KR&page=${pageParam}`
  );
  return data;
};

export default useGetMovies;
