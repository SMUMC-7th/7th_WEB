import axios from 'axios';
import { Refresh } from '../apis/auth';
const axiosMovieInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

const axiosUserInstance = axios.create({
    baseURL: import.meta.env.USER_API_URL,
});

axiosUserInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response?.status === 401) {
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken !== null) {
                const response = await Refresh({ refreshToken });
                console.log(response.accessToken);
                localStorage.setItem('accessToken', response.accessToken);
            } else {
                window.location.href = '/login';
                return;
            }
        }
    }
);

export { axiosMovieInstance, axiosUserInstance };
