import * as S from './movieCeditDetail.style';
import Profile from '../../components/profile/profile';
import { useParams } from 'react-router-dom';
import Error from '../../components/error/error';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import useGetCredit from '../../hooks/queries/useGetCredit';

const MovieCreditDetail = () => {
    const { movieID } = useParams<{ movieID: string }>();

    const { data, error, isLoading } = useGetCredit(movieID!);

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
