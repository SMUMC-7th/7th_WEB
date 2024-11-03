import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://api.spotify.com/v1",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
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
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default axiosInstance;
