import * as S from './moviesCategory.style';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import ClipLoader from 'react-spinners/ClipLoader';

import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import MovieCard from '../../components/movieCard/movieCard';
import CardListSkeleton from '../../components/movieCard/Skeleton/card-list-skeleton';

import useGetInfiniteMovies from '../../hooks/queries/useGetInfiniteMovies';

const MoviesCategory = () => {
    const { category } = useParams();

    const {
        data: movies,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isPending,
        isFetching,
    } = useGetInfiniteMovies(category);

    const { ref, inView } = useInView(
        {
            threshold: 0,
        },
        [],
    );
    useEffect(() => {
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);
    if (isPending) {
        return <Loading />;
    }
    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        console.log('에러 발생:', error);
        return <Error message="영화를 가져오는 중에 문제가 발생했습니다." />;
    }

    if (!movies) {
        console.log('데이터가 없습니다');
        return <Error message="해당 카테고리의 영화 데이터가 없습니다." />;
    }

    console.log(movies.pages[0]);
    return (
        <S.Container>
            <S.MovieCardList>
                {movies?.pages.map((page) => {
                    return page.results.map((movie) => {
                        return <MovieCard key={movie.id} {...movie} />;
                    });
                })}
                {isFetching && <CardListSkeleton number={20} />}
            </S.MovieCardList>
            <div ref={ref} style={{ marginTop: '50px' }}>
                {isFetching && <ClipLoader color={'#fff'} />}
            </div>
        </S.Container>
    );
};

export default MoviesCategory;
