import * as S from './home.style';
import MovieCard from '../../components/movieCard/movieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const HomePage = () => {
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
            {movies.data?.results.map((movie, _) => {
                //?: optional changing
                console.log(_);
                return <MovieCard key={movie.id} {...movie} />;
            })}
        </S.Container>
    );
};

export default HomePage;
