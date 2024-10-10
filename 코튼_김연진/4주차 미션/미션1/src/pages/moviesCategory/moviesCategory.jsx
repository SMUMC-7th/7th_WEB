import * as S from './moviesCategory.style';
import MovieCard from '../../components/movieCard/movieCard';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import Lottie from 'react-lottie-player';
import loadingJson from '../../../public/lottie/Animation - 1728478059105.json';
import errorJson from '../../../public/lottie/Animation - 1728478966350.json';

const MoviesCategory = () => {
    const { category } = useParams();
    const {data:movies, isLoading, isError}= useCustomFetch(`/movie/${category}?language=ko&page=1`);

    if (isLoading) {
        return <S.Alert><Lottie loop animationData={loadingJson} play /></S.Alert>
    }

    if (isError) {
        return <S.Alert>
            <Lottie loop animationData={errorJson} play />
            <S.Button>홈으로 이동</S.Button>
        </S.Alert>;
    }

    return (
        <S.Container>
            {movies.data?.results.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </S.Container>
    );
};

export default MoviesCategory;