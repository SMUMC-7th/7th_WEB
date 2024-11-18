import { useState, useEffect } from 'react';
import Button from '../../components/button/button';
import { useSearchParams, useNavigate } from 'react-router-dom';
import * as S from './search.style';
import useCustomFetch from '../../hook/useCustomFetch';
import { TotalTodoData } from '../../hook/useCustomFetch';
import Loading from '../../components/loading/loading';
import Todo from '../../components/todo/todo';
import Error from '../../components/error/error';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const mq = searchParams.get('mq') || '';
    const [error, setError] = useState(false);

    const handleError = (error: boolean) => setError(error);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchValue);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchValue]);

    useEffect(() => {
        if (debouncedSearch.trim()) {
            setSearchParams({ mq: debouncedSearch });
            navigate(`/search?mq=${debouncedSearch}`);
        }
    }, [debouncedSearch, navigate, setSearchParams]);

    const { data, isLoading, isError } = useCustomFetch<TotalTodoData>(
        `todo?title=${mq}`
    );

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearchTodoWithKeyboard = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearchTodo();
        }
    };

    const handleSearchTodo = () => {
        if (mq !== searchValue) {
            setSearchParams({ mq: searchValue });
            navigate(`/search?mq=${searchValue}`);
        }
    };

    if (isError || error) return <Error />;

    const isButtonDisabled = !searchValue.trim();
    const noResultsFound = data?.[0]?.length === 0;

    return (
        <S.Container>
            <S.Container2>
                <S.SearchInput
                    placeholder="찾고 싶은 todo의 키워드를 입력해주세요"
                    onChange={onChangeSearchValue}
                    value={searchValue}
                    onKeyDown={handleSearchTodoWithKeyboard}
                />
                <Button
                    text={'검색'}
                    disabled={isButtonDisabled}
                    onClick={handleSearchTodo}
                />
            </S.Container2>

            {mq !== '' && (
                <S.Todolist>
                    {isLoading ? (
                        <Loading />
                    ) : noResultsFound ? (
                        <h3>검색 결과가 없습니다</h3>
                    ) : (
                        data?.[0].map((todo) => (
                            <Todo
                                key={todo.id}
                                {...todo}
                                onError={handleError}
                            />
                        ))
                    )}
                </S.Todolist>
            )}
        </S.Container>
    );
};

export default Search;
