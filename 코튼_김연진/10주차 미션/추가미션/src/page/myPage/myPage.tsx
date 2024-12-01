import { useQuery } from '@tanstack/react-query';
import { userMe } from '../../apis/auth';
import { useAuthContext } from '../../context/LogInContext';
import profileImg from '../../image/blank-profile-picture-973460.svg';
import { FaCrown } from 'react-icons/fa';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
const MyPage = () => {
    const { isLogin } = useAuthContext();

    const {
        data: user = {},
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['user'],
        queryFn: userMe,
        enabled: !!isLogin,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    return (
        <div className="w-full h-full bg-slate-50 flex justify-center items-center">
            <div className="profile-container max-w-[400px] w-[30%] h-[60%] flex flex-col justify-center items-center gap-[50px]">
                {user.role === 'admin' ? (
                    <div className="admin-icon w-[150px] h-[150px] bg-slate-300 justify-center items-center flex rounded-[50%]">
                        <FaCrown size={100} strokeWidth={1} color="white" />
                    </div>
                ) : (
                    <img
                        src={profileImg}
                        alt="Default profile"
                        className="profile-img w-[200px] rounded-[50%]"
                    />
                )}
                <div className="user-info flex flex-col items-center gap-[10px]">
                    <span className="user-id text-[20px] font-[600]">
                        {user.id}
                    </span>
                    <span className="user-email text-[20px] font-[600]">
                        {user.email}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
