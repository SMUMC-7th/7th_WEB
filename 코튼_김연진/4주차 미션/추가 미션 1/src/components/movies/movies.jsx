import useCustomFetch from '../../hooks/useCustomFetch';
import MovieCard from '../movieCard/movieCard';
import * as S from './movies.style';
import Error from '../error/error';
import Loading from '../loading/loading';

const Movies = ({ setMovieIdList, movieIdList }) => {
    const {
        data: movies,
        isLoading,
        isError,
    } = useCustomFetch(`/movie/popular?language=ko&page=1`);

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <Error />;
    }

    return (
        <S.Container>
            {movies.data?.results.map((movie) => (
                <MovieCard
                    key={movie.id}
                    {...movie}
                    setMovieIdList={setMovieIdList}
                    movieIdList={movieIdList}
                />
            ))}
        </S.Container>
    );
};

export default Movies;
