import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const accessToken = cookies.get('accessToken') || null;

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  baseURL: import.meta.env.VITE_API_URL,
});

export { axiosInstance };
