import Axios from "axios";

const testInstance = Axios.create({
  baseURL: "https://koreanjson.com",
  timeout: 5000,
});

testInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.error("No access token found");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetchData = async (endpoint) => {
  try {
    const response = await testInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default testInstance;
