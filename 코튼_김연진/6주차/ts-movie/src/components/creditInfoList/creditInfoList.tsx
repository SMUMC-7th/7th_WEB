import Profile from '../profile/profile.jsx';
import * as S from './creditInfoList.style.js';
import useCustomFetch from '../../hooks/useCustomFetch';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import { CreditData } from '../../hooks/useCustomFetch';
import Error from '../error/error.jsx';

interface CreditInfoListProps {
    movieId: string;
}
const CreditInfoList = ({ movieId }: CreditInfoListProps) => {
    const {
        data: credit,
        isLoading,
        isError,
    } = useCustomFetch<CreditData>(`/movie/${movieId}/credits?language=ko`);

    if (isLoading) {
        return (
            <S.Alert>
                <Lottie loop animationData={loadingJson} play />
            </S.Alert>
        );
    }
    if (isError) {
        return <Error />;
    }
    if (!credit) {
        return <S.Alert>데이터를 찾을 수 없습니다...</S.Alert>;
    }

    return (
        <S.Container>
            <S.Title>감독/출연</S.Title>
            <S.Member>
                {credit.cast.map((cast) => (
                    <Profile key={cast.id} {...cast} />
                ))}
                {credit.crew.map((crew) => (
                    <Profile key={crew.id} {...crew} />
                ))}
            </S.Member>
        </S.Container>
    );
};

export default CreditInfoList;
