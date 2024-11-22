import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as S from './search.style';
import Loading from '../../components/loading/loading';
import Todo from '../../components/todo/todo';
// import Error from '../../components/error/error';
import { searchTodoList } from '../../apis/todo';

const Search = () => {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const { data, isPending } = useQuery({
        queryFn: () => searchTodoList({ title: debouncedSearch }),
        queryKey: ['todos', debouncedSearch],
        enabled: !!debouncedSearch,
    });

    const noResultsFound = data?.length === 0;

    return (
        <S.Container>
            <S.Container2>
                <S.SearchInput
                    placeholder="찾고 싶은 todo의 키워드를 입력해주세요"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </S.Container2>

            <S.Todolist>
                {isPending && search !== '' ? (
                    <Loading />
                ) : noResultsFound ? (
                    <h3>검색 결과가 없습니다</h3>
                ) : (
                    data?.map((todo) => <Todo key={todo.id} {...todo} />)
                )}
            </S.Todolist>
        </S.Container>
    );
};

export default Search;
