import * as S from './home.style';
import MovieCard from '../../components/movieCard/movieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from '../../components/loading/loading.jsx';
import Error from '../../components/error/error.jsx';

const HomePage = () => {
    const {
        data: movies,
        isLoading,
        isError,
    } = useCustomFetch(`/movie/popular?language=ko&page=1`);
    console.log(isLoading);
    console.log(isError);

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError) {
        return <Error></Error>;
    }

    return (
        <S.Container>
            {movies.data?.results.map((movie, _) => {
                console.log(_);
                return <MovieCard key={movie.id} {...movie} />;
            })}
        </S.Container>
    );
};

export default HomePage;
