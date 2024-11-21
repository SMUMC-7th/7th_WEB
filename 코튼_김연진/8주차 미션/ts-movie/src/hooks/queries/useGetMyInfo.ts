import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from '../../apis/user';
import { TMyInfoResponse } from '../../apis/user';

function useGetMyInfo(accessToken: string | null) {
    return useQuery<TMyInfoResponse | null>({
        queryKey: ['myInfo'],
        queryFn: () => {
            if (accessToken) {
                return getMyInfo({ accessToken });
            }
            return null;
        },
        enabled: !!accessToken,
    });
}

export default useGetMyInfo;
