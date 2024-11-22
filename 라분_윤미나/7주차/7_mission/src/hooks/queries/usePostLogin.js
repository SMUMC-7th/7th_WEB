import axios from "axios";

const postLogin = async ({ data }) => {
  if (!data) {
    throw new Error("데이터가 올바르지 않음.");
  }

  try {
    const response = await axios.post(`http://localhost:3000/auth/login`, data);
    console.log("서버 응답:", response);
    return response.data;
  } catch (error) {
    console.log("post 실패: ", error);
  }
};

export default postLogin;
