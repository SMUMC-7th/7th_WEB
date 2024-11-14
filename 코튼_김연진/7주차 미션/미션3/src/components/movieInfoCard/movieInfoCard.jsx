import * as S from './movieInfoCard.style.js';
import Error from '../error/error.jsx';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import { getSingleMovie } from '../../apis/movie';
import { useQuery } from '@tanstack/react-query';

function MovieInfoCard(props) {
    const { movieId } = props;
    const { data, error, isLoading } = useQuery({
        queryKey: ['movieId', movieId],
        queryFn: () => getSingleMovie(movieId || ''),
        enabled: !!movieId,
    });
    console.log(data);
    if (error) {
        console.log('에러 발생', error);
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

    const {
        poster_path,
        title,
        vote_average,
        release_date,
        overview,
        tagline,
        runtime,
    } = data;

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
    const formattedReleaseDate = release_date.slice(0, 4);

    return (
        <S.Container image={backgroundImageUrl}>
            <S.Backdrop />
            <S.Texts>
                <S.Title>{title}</S.Title>
                <S.Text>평균 {vote_average}</S.Text>
                <S.Text>{formattedReleaseDate}</S.Text>
                <S.Text>{runtime}분</S.Text>
                <S.Tagline>{tagline}</S.Tagline>
                <S.Text>{overview}</S.Text>
            </S.Texts>
        </S.Container>
    );
}

export default MovieInfoCard;
