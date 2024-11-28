import { TAuthBody, TAuthResponse } from '../type/auth';
import { axiosInstance } from './axios-instance';

const postSignup = async ({ email, password, role }: TAuthBody): Promise<TAuthResponse> => {
  const { data } = await axiosInstance.post('/users', {
    email: email,
    password: password,
    role: role,
  });
  return data;
};

const postLogin = async ({ email, password }: TAuthBody) => {
  const { data } = await axiosInstance.post(
    '/auth/login',
    {
      email: email,
      password: password,
    },
    { withCredentials: true },
  );
  return data;
};

const postRefresh = async () => {
  const { data } = await axiosInstance.post('/auth/refresh', {}, { withCredentials: true });
  return data;
};

export { postSignup, postLogin, postRefresh };
