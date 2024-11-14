import { axiosInstance } from "../../apis/axios-instance";

const fetchGetCredit = async ({ id }) => {
  const { data } = await axiosInstance.get(`/movie/${id}/credits?language=ko`);
  console.log("데이터 불러오는중...");
  return data;
};

export default fetchGetCredit;
