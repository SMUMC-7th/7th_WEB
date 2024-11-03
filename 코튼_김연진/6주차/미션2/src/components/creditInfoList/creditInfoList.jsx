import Profile from '../profile/profile.jsx';
import * as S from './creditInfoList.style.js';
import useCustomFetch from '../../hooks/useCustomFetch';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';

import Error from '../error/error.jsx';

const CreditInfoList = ({ movieId }) => {
    const {
        data: credit,
        isLoading,
        isError,
    } = useCustomFetch(`/movie/${movieId}/credits?language=ko`);

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
    if (!credit?.data) {
        return <S.Alert>데이터를 찾을 수 없습니다...</S.Alert>;
    }
    console.log(credit);
    return (
        <S.Container>
            <S.Title>감독/출연</S.Title>
            <S.Member>
                {credit?.data.cast.map((cast) => (
                    <Profile key={cast.id} {...cast} />
                ))}
                {credit?.data.crew.map((crew) => (
                    <Profile key={crew.id} {...crew} />
                ))}
            </S.Member>
        </S.Container>
    );
};

export default CreditInfoList;
