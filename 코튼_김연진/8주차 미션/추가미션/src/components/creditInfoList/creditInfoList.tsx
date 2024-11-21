import Profile from '../profile/profile.jsx';
import Error from '../error/error.jsx';
import ClipLoader from 'react-spinners/ClipLoader.js';
import { Link } from 'react-router-dom';
import useGetCredit from '../../hooks/queries/useGetCredit.js';

interface CreditInfoListProps {
    movieId: string;
}

const CreditInfoList = ({ movieId }: CreditInfoListProps) => {
    const { data, error, isLoading } = useGetCredit(movieId);

    if (error) {
        console.log('Error fetching data', error);
        return <Error />;
    }

    if (isLoading) {
        return (
            <div className="flex text-center w-full h-[154px] text-[20px] text-white items-center justify-center">
                <ClipLoader color="white" />
            </div>
        );
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    const someData = data?.cast.slice(0, 5);

    return (
        <div className="flex relative flex-col m-[20px]">
            <div className="mt-[20px] block w-[130px] text-white text-[20px] font-bold whitespace-nowrap text-ellipsis overflow-hidden relative">
                감독/출연
            </div>
            <Link
                className="text-white bg-black border-none w-auto absolute top-[35px] right-[25px] no-underline"
                to={`/credit/${movieId}`}
            >
                더보기
            </Link>
            <div className="flex w-full gap-[10px] flex-wrap">
                {someData.map((cast, idx) => (
                    <Profile key={idx} {...cast} />
                ))}
            </div>
        </div>
    );
};

export default CreditInfoList;
