import * as S from './search.style';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { KeyboardEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../../components/movieCard/movieCard';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import {
    getSearchMovie,
    TMovieSingleResponse,
    TMovieTotalResponse,
} from '../../apis/movie';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const mq = searchParams.get('mq') || '';

    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchValue.trim()) {
                setSearchParams({ mq: searchValue });
                navigate(`/search?mq=${searchValue}`);
            }
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue, navigate, setSearchParams]);

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };

    const handleSearchMovieWithKeyboard = (
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    };

    const { data, error, isLoading } = useQuery<TMovieTotalResponse>({
        queryKey: ['searchMovie', mq],
        queryFn: () => getSearchMovie(mq, 1),
        enabled: !!mq,
    });

    if (isLoading) {
        return <Loading />;
    }

    if (error && mq) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <S.Container>
            <S.MovieCardList>
                {data?.results.map((movie: TMovieSingleResponse) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </S.MovieCardList>
        </S.Container>
    );
};

export default Search;
