import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

// 유저 정보 불러오기
const accessToken = localStorage.getItem('accessToken');

const axiosInstanceUser = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export { axiosInstance, axiosInstanceUser };
