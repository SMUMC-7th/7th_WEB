import { axiosInstance } from "../../apis/axios-instance";

const fetchGetPage = async (pageParam: number) => {
  const { data } = await axiosInstance.get(
    `/movie/popular?language=ko&page=${pageParam}`
  );
  console.log("데이터 불러오는중...");
  return data;
};

export default fetchGetPage;
