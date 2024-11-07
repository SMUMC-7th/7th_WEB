import * as S from './movieList.style';
import MovieCard from '../movieCard/movieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from '../loading/loading';
import Error from '../error/error';
const MovieList = ({ url }) => {
    const { data: movies, isLoading, isError } = useCustomFetch(url);
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

export default MovieList;
