import { axiosInstance } from "../../apis/axios-instance";

const fetchGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(
    `/movie/${category}?language=ko&page=${pageParam}`
  );
  console.log("데이터 불러오는중...");
  return data;
};

export { fetchGetMovies };
