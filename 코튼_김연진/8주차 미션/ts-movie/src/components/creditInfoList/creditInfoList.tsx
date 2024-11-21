import Profile from '../profile/profile.jsx';
import * as S from './creditInfoList.style.js';
import Error from '../error/error.jsx';
import ClipLoader from 'react-spinners/ClipLoader.js';
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
            <S.Alert>
                <ClipLoader color="white" />
            </S.Alert>
        );
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    const someData = data?.cast.slice(0, 5);

    return (
        <S.Container>
            <S.Title>감독/출연</S.Title>
            <S.Button to={`/credit/${movieId}`}>더보기</S.Button>
            <S.Member>
                {someData.map((cast, idx) => (
                    <Profile key={idx} {...cast} />
                ))}
            </S.Member>
        </S.Container>
    );
};

export default CreditInfoList;
