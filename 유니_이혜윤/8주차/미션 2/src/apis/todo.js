import axiosInstance from "./axiosInstance";

// Todo 생성
const postTodo = async ({ title, content, checked = false }) => {
  const { data } = await axiosInstance.post("/todo", {
    title,
    content,
    checked,
  });

  return data;
};

// Todo List 가져오기
const getTodoList = async (params) => {
  const response = await axiosInstance.get("/todo", { params }); // 쿼리 파라미터 처리
  return response.data; // 전체 데이터를 반환
};

// Todo 하나 가져오기
const getTodo = async ({ id }) => {
  const { data } = await axiosInstance.get(`/todo/${id}`);

  return data;
};

// Todo 검색
const searchTodo = async ({ title }) => {
  let url = "/todo";

  if (title) {
    url += `?title=${title}`;
  }

  const response = await axiosInstance.get(url);
  const data = response.data[0];
  return data;
};

// Todo 수정
const patchTodo = async ({ id, title, content, checked }) => {
  const { data } = await axiosInstance.patch(`/todo/${id}`, {
    title,
    content,
    checked,
  });

  return data;
};

// Todo 삭제
const deleteTodo = async ({ id }) => {
  const { data } = await axiosInstance.delete(`/todo/${id}`);

  return data;
};

export { postTodo, getTodo, searchTodo, getTodoList, patchTodo, deleteTodo };
