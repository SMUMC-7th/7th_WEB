import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TODO_API_URL,
});

export { axiosInstance };
