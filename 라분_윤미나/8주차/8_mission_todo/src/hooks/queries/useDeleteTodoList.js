import { axiosInstance } from "../../apis/axios-instance";

const fetchDeleteTodoList = async ({ id }) => {
  try {
    const response = await axiosInstance.delete(`/todo/${id}`);
    console.log("데이터 삭제 중...");
    return response.data;
  } catch (error) {
    console.error("Todo 삭제 API 호출 실패:", error);
    throw error;
  }
};

export default fetchDeleteTodoList;
