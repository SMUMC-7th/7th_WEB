import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

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
        // const id = localStorage.getItem('id');
        const refreshResponse = await axios.post(
            `${API_BASE_URL}/auth/token/access`,
            {
                refreshToken,
            },
        );
        console.log(refreshResponse);
        console.log(refreshResponse.data);
        const { accessToken: newAccessToken } = refreshResponse.data;
        localStorage.setItem('accessToken', newAccessToken);
        const retryResponse = await axios.get(`${API_BASE_URL}/user/me`, {
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
            },
        });
        console.log(retryResponse.data);
        return retryResponse.data;
    } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        window.location.href('/login');
        return null;
    }
};

export default fetchUserData;
