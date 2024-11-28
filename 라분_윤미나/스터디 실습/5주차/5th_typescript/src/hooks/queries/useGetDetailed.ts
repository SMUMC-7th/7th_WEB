import { axiosInstance } from "../../apis/axios-instance";

const fetchGetDetailed = async (id: number) => {
  const { data } = await axiosInstance.get(`/movie/${id}?language=ko`);
  console.log("데이터 불러오는중...");
  return data;
};

export default fetchGetDetailed;
