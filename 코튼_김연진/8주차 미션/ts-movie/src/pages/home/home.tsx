import * as S from './home.style';
import MovieCardBackdrop from '../../components/movieCard_backdrop/movieCardBackdrop';
import { TMovieSingleResponse } from '../../apis/movie';

import Error from '../../components/error/error';
import CardListSkeleton from '../../components/movieCard_backdrop/Skeleton/card-list-skeleton';
import useGetTrendingMovies from '../../hooks/queries/useGetTrendingMovies';
const HomePage = () => {
    const { data, error, isLoading } = useGetTrendingMovies();

    if (isLoading) {
        return (
            <S.Alert>
                <CardListSkeleton number={20}></CardListSkeleton>
            </S.Alert>
        );
    }

    if (!data || error) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    return (
        <S.Container>
            <S.Title>Trending movies</S.Title>
            {isLoading ? (
                <S.Alert>
                    <CardListSkeleton number={20}></CardListSkeleton>
                </S.Alert>
            ) : (
                <S.MovieList>
                    {data.results.map((movie: TMovieSingleResponse) => (
                        <MovieCardBackdrop key={movie.id} {...movie} />
                    ))}
                </S.MovieList>
            )}
        </S.Container>
    );
};

export default HomePage;
