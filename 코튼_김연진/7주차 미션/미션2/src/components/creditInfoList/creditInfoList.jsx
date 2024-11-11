import Profile from '../profile/profile.jsx';
import * as S from './creditInfoList.style.js';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import Error from '../error/error.jsx';
import { getMovieCredit } from '../../apis/movie';
import { useQuery } from '@tanstack/react-query';

const CreditInfoList = ({ movieId }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['movieCredit', movieId],
        queryFn: () => getMovieCredit(movieId || ''),
        enabled: !!movieId,
    });

    if (error) {
        console.log('Error fetching data', error);
        return <Error />;
    }

    if (isLoading) {
        return (
            <S.Alert>
                <Lottie loop animationData={loadingJson} play />{' '}
            </S.Alert>
        );
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <S.Container>
            <S.Title>감독/출연</S.Title>
            <S.Member>
                {data.cast.map((cast) => (
                    <Profile key={cast.id} {...cast} />
                ))}
                {data.crew.map((crew) => (
                    <Profile key={crew.id} {...crew} />
                ))}
            </S.Member>
        </S.Container>
    );
};

export default CreditInfoList;
