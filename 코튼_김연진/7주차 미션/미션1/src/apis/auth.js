import { axiosUserInstance } from './axios-instance';

const Login = async ({ email, password }) => {
    const { data } = await axiosUserInstance.post(
        'http://localhost:3000/auth/login',
        { email, password },
    );
    return data;
};

const Signup = async ({ email, password, passwordCheck }) => {
    const { data } = await axiosUserInstance.post(
        'http://localhost:3000/auth/register',
        { email, password, passwordCheck },
    );
    return data;
};

const Refresh = async ({ refreshToken }) => {
    try {
        console.log('리프레시 소환');
        const { data } = await axiosUserInstance.post(
            'http://localhost:3000/auth/token/access',
            {},
            {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            },
        );
        console.log(data);
        return data;
    } catch (error) {
        if (error.response?.status === 401) {
            console.warn('Refresh token expired. Redirecting to login...');
        } else {
            console.error(
                'An unexpected error occurred during token refresh:',
                error,
            );
        }
        return null;
    }
};

export { Login, Signup, Refresh };
