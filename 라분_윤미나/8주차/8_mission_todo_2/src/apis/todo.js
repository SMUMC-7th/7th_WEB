import axiosInstance from "./axiosInstance";

// Todo : 생성
const postTodo = async ({ title, content, checked = false }) => {
  try {
    const { data } = await axiosInstance.post("/todo", {
      title,
      content,
      checked,
    });
    return data;
  } catch (error) {
    console.log("post 실패: ", error);
    throw error;
  }
};

// TOdo : Todo List  가져오기 (title)
const getTodoList = async ({ title }) => {
  try {
    let url = "/todo";
    if (title) {
      url += `?title=${title}`;
    }
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error) {
    console.log("get TodoList 실패: ", error);
    throw error;
  }
};

// TOdo : Todo 단건 가져오기
const getTodo = async ({ id }) => {
  try {
    const { data } = await axiosInstance.get(`/todo/${id}`);
    return data;
  } catch (error) {
    console.log("get Todo 실패: ", error);
    throw error;
  }
};

// Todo : TOdo 수정하기
const patchTodo = async ({ id, title, content, checked }) => {
  try {
    const { data } = await axiosInstance.patch(`/todo/${id}`, {
      title,
      content,
      checked,
    });
    return data;
  } catch (error) {
    console.log("patch 실패: ", error);
    throw error;
  }
};

// Todo : TOdo 삭제하기
const deleteTodo = async ({ id }) => {
  try {
    const { data } = await axiosInstance.delete(`/todo/${id}`);
    return data;
  } catch (error) {
    console.log("delete 실패: ", error);
    throw error;
  }
};

export { postTodo, getTodoList, getTodo, patchTodo, deleteTodo };
