import Profile from '../profile/profile.jsx';
import * as S from './creditInfoList.style.js';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from "../loading/loading.jsx"
import Error from "../error/error.jsx"
const CreditInfoList = ({ movieId }) => {
    const { data: credit, isLoading, isError } = useCustomFetch(`/movie/${movieId}/credits?language=ko`);

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isError) {
        return <Error></Error>
    }

    if (!credit?.data) {
        return <S.Alert>데이터를 찾을 수 없습니다...</S.Alert>;
    }

    return (
        <S.Container>
            <S.Title>감독/출연</S.Title>
            <S.Member>
                {credit.data.cast.map((cast) => (
                    <Profile key={cast.id} {...cast} />
                ))}
                {credit.data.crew.map((crew) => (
                    <Profile key={crew.id} {...crew} />
                ))}
            </S.Member>
        </S.Container>
    );
};

export default CreditInfoList;