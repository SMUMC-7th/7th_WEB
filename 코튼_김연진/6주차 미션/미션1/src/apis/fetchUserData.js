import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

let isRedirecting = false;

const fetchUserData = async () => {
    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get(`${API_BASE_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.warn(
                'Access token이 만료 되었습니다. 재발급 시도중입니다.',
            );

            return await handleTokenRefreshAndRetry();
        } else {
            console.error('Error fetching user data:', error);
            return null;
        }
    }
};

const handleTokenRefreshAndRetry = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');

        const refreshResponse = await axios.post(
            `http://localhost:3000/auth/token/access`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            },
        );

        const { accessToken: newAccessToken } = refreshResponse.data;
        localStorage.setItem('accessToken', newAccessToken);

        const retryResponse = await axios.get(`${API_BASE_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
            },
        });
        console.log('토큰 재발급에 성공하였습니다');

        return retryResponse.data;
    } catch (refreshError) {
        console.error('Token 재발급에 실패했습니다:', refreshError);
        redirectToLogin();
        return null;
    }
};
const redirectToLogin = () => {
    if (!isRedirecting) {
        isRedirecting = true;
        window.location.href('/login');
    }
};

export default fetchUserData;
