import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MovieCard from '../../components/movieCard/movieCard';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import useGetSearchMovies from '../../../../추가미션/src/hooks/queries/useGetSearchMovies';
import { TMovieSingleResponse } from '../../apis/movie';

const Search = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    const { data, error, isLoading } = useGetSearchMovies(mq);

    if (isLoading) {
        return <Loading />;
    }

    if (error && mq) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex w-auto flex-wrap m-[20px] gap-[20px] mb-[30px] justify-center">
                {data?.results.map((movie: TMovieSingleResponse) => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default Search;
