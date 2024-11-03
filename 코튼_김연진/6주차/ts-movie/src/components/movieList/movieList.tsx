/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from './movieList.style';
import { FetchResponse } from '../../hooks/useCustomFetch';
import Loading from '../loading/loading';
import Error from '../error/error';
import MovieCard from '../movieCard/movieCard';
import useCustomFetch from '../../hooks/useCustomFetch';
interface MovieListProps {
    url: string;
    mq?: string;
}
const MovieList = (props: MovieListProps) => {
    const { url, mq } = props;
    const {
        data: movies,
        isLoading,
        isError,
    } = useCustomFetch<FetchResponse>(url);

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError || !movies) {
        return <Error></Error>;
    }
    if (mq && movies?.results.length === 0) {
        return (
            <S.Container>
                <S.Text>찾으시는 '{mq}'에 대한 결과가 없습니다.</S.Text>
            </S.Container>
        );
    }
    return (
        <S.Container>
            {movies.results.map((movie, _) => {
                return <MovieCard key={movie.id} {...movie} />;
            })}
        </S.Container>
    );
};

export default MovieList;
