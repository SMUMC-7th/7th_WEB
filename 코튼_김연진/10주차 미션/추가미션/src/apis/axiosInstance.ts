import axios from 'axios';
import { Refresh } from './auth';
import { Cookies } from 'react-cookie';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_USER_API_URL,
    withCredentials: true,
});
let isRedirecting = false;

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            if (error.response.data.message === 'Unauthorized') {
                const cookies = new Cookies();
                const refreshToken = cookies.get('refreshToken');
                if (refreshToken !== undefined) {
                    const response = await Refresh();
                    if (response.status === 200) {
                        console.log('refreshToken이 재발급 되었습니다');
                    } else if (response.status === 401) {
                        console.log(
                            'refreshToken이 만료되었습니다. 다시 로그인해주세요.'
                        );
                        cookies.remove('refreshToken');
                        cookies.remove('accessToken');

                        window.location.replace('/login');
                    } else {
                        console.log(
                            '알 수 없는 오류가 발생했습니다.',
                            response.status
                        );
                    }
                } else {
                    console.log(
                        'refreshToken이 없습니다. 로그인 페이지로 이동합니다.'
                    );
                    if (!isRedirecting) {
                        isRedirecting = true;
                        window.location.replace('/login');
                    }
                }
            }
        }
        return Promise.reject(error);
    }
);

export { axiosInstance };
