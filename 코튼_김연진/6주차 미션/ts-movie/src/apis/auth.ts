import { axiosUserInstance } from './axios-instance';
type TLogin = {
    email: string;
    password: string;
};

type TSignup = {
    email: string;
    password: string;
    passwordCheck: string;
};
type TLoginResponse = {
    accessToken: string;
    refreshToken: string;
};

type TSignupResponse = {
    id: number;
    email: string;
    password: string;
};

type TRefresh = {
    refreshToken: string;
};

type TRefreshResponse = {
    accessToken: string;
};

const Login = async ({ email, password }: TLogin): Promise<TLoginResponse> => {
    const { data } = await axiosUserInstance.post<TLoginResponse>(
        'http://localhost:3000/auth/login',
        { email, password }
    );
    return data;
};

const Signup = async ({
    email,
    password,
    passwordCheck,
}: TSignup): Promise<TSignupResponse> => {
    const { data } = await axiosUserInstance.post<TSignupResponse>(
        'http://localhost:3000/auth/register',
        { email, password, passwordCheck }
    );
    return data;
};

const Refresh = async ({
    refreshToken,
}: TRefresh): Promise<TRefreshResponse> => {
    const { data } = await axiosUserInstance.post<TRefreshResponse>(
        'http://localhost:3000/auth/token/access',
        {},
        {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        }
    );
    return data;
};

export { Login, Signup, Refresh };
