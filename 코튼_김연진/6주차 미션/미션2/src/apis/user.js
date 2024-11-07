import { axiosUserInstance } from './axios-instance';
const getMyInfo = async ({ accessToken }) => {
    const { data } = await axiosUserInstance.get(
        'http://localhost:3000/user/me',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        },
    );
    return data;
};

export { getMyInfo };
