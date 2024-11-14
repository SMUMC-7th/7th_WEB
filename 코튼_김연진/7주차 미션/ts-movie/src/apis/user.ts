import { axiosUserInstance } from './axios-instance';
export type TMyInfo = {
    accessToken: string;
};

export type TMyInfoResponse = {
    id: string;
    email: string;
};
const getMyInfo = async ({
    accessToken,
}: TMyInfo): Promise<TMyInfoResponse> => {
    const { data } = await axiosUserInstance.get<TMyInfoResponse>(
        'http://localhost:3000/user/me',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return data;
};

export { getMyInfo };
