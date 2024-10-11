import * as S from './moviesCategory.style';
import MovieCard from '../../components/movieCard/movieCard';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const MoviesCategory = () => {
    const { category } = useParams();
    const {
        data: movies,
        isLoading,
        isError,
    } = useCustomFetch(`/movie/${category}?language=ko&page=1`);

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <Error />;
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
