import { axiosInstance } from "../../apis/axios-instance";

const useGetMovieDetail = async ({ movieId }) => {
  const { data } = await axiosInstance.get(
    `/movie/${movieId}/videos?language=en-US`
  );
  console.log(data);
  return data;
};

export default useGetMovieDetail;
