import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useGetInfiniteMovies from '../../hooks/queries/useGetInfiniteMovies';
import { useInView } from 'react-intersection-observer';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import MovieCard from '../../components/movieCard/movieCard';
import CardListSkeleton from '../../components/movieCard/Skeleton/card-list-skeleton';
import ClipLoader from 'react-spinners/ClipLoader';

const MoviesCategory = () => {
    const { category } = useParams<{
        category: 'now_playing' | 'popular' | 'top_rated' | 'upcoming';
    }>();

    const categoryToKorean = {
        now_playing: '현재 상영중인 영화',
        popular: '인기있는 영화',
        top_rated: '높은 평가를 받은 영화',
        upcoming: '개봉 예정 영화',
    };

    const koreanTranslation = category
        ? categoryToKorean[category]
        : '카테고리 없음';

    const {
        data: movies,
        error,
        isLoading,
        fetchNextPage,
        hasNextPage,
        isPending,
        isFetching,
    } = useGetInfiniteMovies(category!);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && !isFetching && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);

    if (isPending || isLoading) {
        return <Loading />;
    }

    if (error) {
        console.error('에러 발생:', error);
        return <Error />;
    }

    if (!movies) {
        console.error('데이터가 없습니다');
        return <Error />;
    }

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex text-white justify-start w-full text-[25px] ml-[20px]">
                {koreanTranslation}
            </div>
            <div className="flex flex-wrap justify-center mt-[20px] gap-[20px]">
                {movies.pages.map((page) =>
                    page.results.map((movie) => (
                        <MovieCard key={movie.id} {...movie} />
                    ))
                )}
                {isFetching && !movies && <CardListSkeleton number={20} />}
            </div>
            <div ref={ref} style={{ marginTop: '50px' }}>
                {isFetching && movies && <ClipLoader color={'#fff'} />}
            </div>
        </div>
    );
};
export default MoviesCategory;
