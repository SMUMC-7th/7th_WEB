import axios from "axios";

const refreshToken = async () => {
  const response = await axios.post(
    "http://localhost:3000/v1/auth/refresh",
    {},
    { withCredentials: true } // 쿠키를 포함하여 요청
  );
  return response.data;
};

export { refreshToken };
