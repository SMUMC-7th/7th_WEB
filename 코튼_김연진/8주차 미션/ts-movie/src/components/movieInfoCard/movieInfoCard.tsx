import * as S from './movieInfoCard.style.js';
import Error from '../error/error.jsx';
import ClipLoader from 'react-spinners/ClipLoader';
import useGetSingleMovie from '../../hooks/queries/useGetSingleMovie.js';

interface Props {
    movieId: string;
}
function MovieInfoCard(props: Props) {
    const { movieId } = props;
    const { data, error, isLoading } = useGetSingleMovie(movieId);

    if (error) {
        console.log('데이터가 없습니다');
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

    const {
        title,
        vote_average,
        release_date,
        overview,
        tagline,
        runtime,
        backdrop_path,
        poster_path,
        genres,
        origin_country,
    } = data;

    let backgroundImageUrl = '';
    if (backdrop_path === null) {
        backgroundImageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
    } else {
        backgroundImageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    }
    const formattedReleaseDate = release_date?.slice(0, 4);
    const formattedRuntime = Math.floor(runtime / 60);
    const formattedRuntimeMin = runtime - formattedRuntime * 60;
    return (
        <S.Container>
            <img src={backgroundImageUrl} alt="" />
            <S.Backdrop />
            <S.Texts>
                <S.Title>{title}</S.Title>
                <div
                    style={{
                        display: 'flex',
                        gap: '10px',
                        color: 'white',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}
                >
                    <S.Text>평균 {vote_average}</S.Text>·
                    <S.Text>{formattedReleaseDate}</S.Text>·
                    <S.Text>
                        {formattedRuntime}시간 {formattedRuntimeMin}분
                    </S.Text>
                    ·<S.Text>{genres?.[0]?.name}</S.Text>·
                    <S.Text>{origin_country?.[0]}</S.Text>
                </div>
                <S.Tagline>{tagline}</S.Tagline>
                <S.Text>{overview}</S.Text>
            </S.Texts>
        </S.Container>
    );
}

export default MovieInfoCard;
