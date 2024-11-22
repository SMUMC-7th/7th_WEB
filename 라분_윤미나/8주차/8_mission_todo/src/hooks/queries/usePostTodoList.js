import { axiosInstance } from "../../apis/axios-instance";

const fetchPostTodoList = async ({ title, content, checked = false }) => {
  if (!title.trim() || !content.trim()) {
    console.error("title과 content가 비어있습니다.");
    return;
  }
  try {
    const { data } = await axiosInstance.post("/todo", {
      title,
      content,
      checked,
    });

    console.log("데이터 작성 완료: ", data);
    return data;
  } catch (error) {
    console.error("Todo 작성 실패:", error);
    throw error;
  }
};

export default fetchPostTodoList;
