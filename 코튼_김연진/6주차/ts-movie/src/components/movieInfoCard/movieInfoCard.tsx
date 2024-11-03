import * as S from './movieInfoCard.style.js';
import useCustomFetch from '../../hooks/useCustomFetch';
import Error from '../error/error.jsx';
import Lottie from 'react-lottie-player';
import loadingJson from '../../lottie/Animation-loading.json';
import { MovieData } from '../../hooks/useCustomFetch';
interface Props {
    movieId: string;
}
function MovieInfoCard(props: Props) {
    const { movieId } = props;
    const {
        data: movie,
        isLoading,
        isError,
    } = useCustomFetch<MovieData>(`/movie/${movieId}?language=ko`);
    console.log(movie);

    if (isLoading) {
        return (
            <S.Alert>
                <Lottie loop animationData={loadingJson} play />{' '}
            </S.Alert>
        );
    }

    if (isError) {
        return <Error />;
    }
    if (!movie) {
        return <S.Alert>데이터를 찾을 수 없습니다...</S.Alert>;
    }

    const {
        poster_path,
        title,
        vote_average,
        release_date,
        overview,
        tagline,
        runtime,
    } = movie;

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
