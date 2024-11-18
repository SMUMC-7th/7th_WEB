import * as S from './movieCeditDetail.style';
import Profile from '../../components/profile/profile';
import { useQuery } from '@tanstack/react-query';
import { TMovieCreditResponse } from '../../apis/movie';
import { getMovieCredit } from '../../apis/movie';
import { useParams } from 'react-router-dom';
import Error from '../../components/error/error';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';

const MovieCreditDetail = () => {
    const { movieID } = useParams();

    const { data, error, isLoading } = useQuery<TMovieCreditResponse>({
        queryKey: ['movieCredit', movieID],
        queryFn: () => getMovieCredit(movieID || ''),
        enabled: !!movieID,
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
    console.log(data);
    return (
        <S.Container>
            <S.Member>
                {data?.cast.map((cast) => (
                    <Profile {...cast}></Profile>
                ))}
                {data?.crew.map((crew) => (
                    <Profile {...crew}></Profile>
                ))}
            </S.Member>
        </S.Container>
    );
};
export default MovieCreditDetail;
