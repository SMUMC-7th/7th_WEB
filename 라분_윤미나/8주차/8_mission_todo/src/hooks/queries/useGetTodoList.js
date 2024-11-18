import { axiosInstance } from "../../apis/axios-instance";

const fetchGetTodoList = async (url) => {
  const { data } = await axiosInstance.get(url);
  console.log("데이터 불러오는중...");
  return data;
};

export default fetchGetTodoList;
