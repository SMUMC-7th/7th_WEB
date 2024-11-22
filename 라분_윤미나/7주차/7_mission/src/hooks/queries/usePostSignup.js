import axios from "axios";

const postSignup = async ({ data }) => {
  if (!data) {
    throw new Error("데이터가 올바르지 않음.");
  }
  //console.log("보낼 데이터:", data, text);
  try {
    const response = await axios.post(`http://localhost:3000/auth/register`, {
      email: data.email,
      password: data.password,
      passwordCheck: data.password_check,
    });
    console.log("서버 응답:", response);
    return response;
  } catch (error) {
    console.log("post 실패: ", error);
  }
};

export default postSignup;
