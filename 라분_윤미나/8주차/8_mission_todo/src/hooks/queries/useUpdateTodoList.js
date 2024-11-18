import { axiosInstance } from "../../apis/axios-instance";

const fetchUpdateTodoList = async ({ id, title, content, checked }) => {
  try {
    const { data } = await axiosInstance.patch(`/todo/${id}`, {
      title,
      content,
      checked,
    });
    console.log("데이터 업데이트 완료: ", data);
    return data;
  } catch (error) {
    console.log("Todo 업데이트 실패: ", error);
    throw error;
  }
};

export default fetchUpdateTodoList;
