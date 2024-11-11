import * as S from './moviesCategory.style';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import MovieCard from '../../components/movieCard/movieCard';

import { getCategoryMovie } from '../../apis/movie';

const MoviesCategory = () => {
    const { category } = useParams();
    const [page, setPage] = useState(1);
    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery({
            queryKey: ['categoryMovies', category, page],
            queryFn: () => getCategoryMovie(category || '', page),
            enabled: !!category,
            keepPreviousData: true,
        });

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        console.log('에러 발생:', error);
        return <Error message="영화를 가져오는 중에 문제가 발생했습니다." />;
    }

    if (!data) {
        console.log('데이터가 없습니다');
        return <Error message="해당 카테고리의 영화 데이터가 없습니다." />;
    }

    return (
        <S.Container>
            <S.MovieCardList>
                {data.results.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>

            <S.Buttons>
                <S.Button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1 || isFetching}
                >
                    이전
                </S.Button>
                <div style={{ color: 'white' }}>{page} 페이지</div>
                <S.Button
                    onClick={() => {
                        if (!isPreviousData && data.page < data.total_pages) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={
                        isPreviousData ||
                        page === data.total_pages ||
                        isFetching
                    }
                >
                    다음
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
};

export default MoviesCategory;
