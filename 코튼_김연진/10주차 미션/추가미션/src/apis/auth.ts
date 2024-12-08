import { axiosInstance } from './axiosInstance';
import { TLogin, TSignup } from '../type/type';

const LogIn = async ({ email, password }: TLogin) => {
    const { data } = await axiosInstance.post(
        '/v1/auth/login',
        { email, password },
        {
            withCredentials: true,
        }
    );
    return data;
};

const SignUp = async ({ email, password }: TSignup) => {
    const role = 'user';
    const { data } = await axiosInstance.post('/v1/users', {
        email,
        password,
        role,
    });
    return data;
};

const LogOut = async () => {
    const { data } = await axiosInstance.post('/v1/auth/logout');
    return data;
};

const Refresh = async () => {
    const { data } = await axiosInstance.post('/v1/auth/refresh');
    return data;
};

const userMe = async () => {
    const { data } = await axiosInstance.get('/v1/users/me');
    return data;
};

const getAllUsers = async () => {
    const { data } = await axiosInstance.get('/v1/users');
    return data;
};
export { LogIn, SignUp, LogOut, Refresh, userMe, getAllUsers };
