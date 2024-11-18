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
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            if (error.response.data.message === 'Unauthorized') {
                const refreshToken = localStorage.getItem('refreshToken');
                if (refreshToken) {
                    const response = await Refresh({ refreshToken });
                    if (response.status === 200) {
                        const newAccessToken = response.accessToken;
                        localStorage.setItem('accessToken', newAccessToken);
                        error.config.headers.Authorization = `Bearer ${response.accessToken}`;
                    } else if (response.status === 401) {
                        console.log(
                            'refreshToken이 만료되었습니다. 다시 로그인해주세요.'
                        );
                        window.location.replace('/login');
                    } else {
                        console.log(
                            '알 수 없는 오류가 발생했습니다.',
                            response.status
                        );
                    }
                } else {
                    window.location.replace('/login');
                }
            }
        }
        return Promise.reject(error);
    }
);

export { axiosMovieInstance, axiosUserInstance };
