import * as S from './movieList.style';
import MovieCard from '../movieCard/movieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
import Loading from '../loading/loading';
import Error from '../error/error';

const MovieList = ({ url, mq }) => {
    const { data: movies, isLoading, isError } = useCustomFetch(url);
    console.log(url);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <Error />;
    }

    if (movies?.data?.results?.length === 0) {
        return (
            <S.Container>
                <S.Text>
                    찾으시는 &apos;{mq}&apos;에 대한 결과가 없습니다.
                </S.Text>
            </S.Container>
        );
    }

    return (
        <S.Container>
            {movies?.data?.results?.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </S.Container>
    );
};

export default MovieList;
