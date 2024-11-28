import { axiosInstance } from "../../apis/axios-instance";
//import { FetchResponse } from "../../mocks/movieType";

const fetchGetSimilar = async (id: number) => {
  const { data } = await axiosInstance.get(
    `/movie/${id}/similar?language=ko&page=1`
  );
  console.log("데이터 불러오는중...");
  console.log(data);
  return data;
};

export default fetchGetSimilar;
