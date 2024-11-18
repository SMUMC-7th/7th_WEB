import * as S from './Home.style';
import { useState } from 'react';
import { addTodo, getTodoList } from '../../apis/todo';
import Error from '../../components/error/error';
import Button from '../../components/button/button';
import Todo from '../../components/todo/todo';
import Loading from '../../components/loading/loading';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '../../main';

const Home = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const {
        data: todos,
        isLoading,
        isError,
        error: fetchError,
    } = useQuery({
        queryFn: getTodoList,
        queryKey: ['todos'],
    });

    const { mutate: postTodoMutation } = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setTitle('');
            setContent('');
        },
        onError: (error: Error) => {
            console.error(error);
        },
    });

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        postTodoMutation({
            title,
            content,
            checked: false,
        });
    };

    const isButtonDisabled = !title.trim() || !content.trim();
    if (fetchError) return <Error></Error>;
    return (
        <S.Container>
            <S.Title>UMC ToDoList</S.Title>
            <S.TodoInputs>
                <input
                    name="title"
                    value={title}
                    placeholder="제목을 입력해주세요"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    name="content"
                    value={content}
                    placeholder="내용을 입력해주세요"
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    text="Todo 생성"
                    onClick={handleAddTodo}
                    disabled={isButtonDisabled}
                />
            </S.TodoInputs>
            {isError && <Error />}

            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        {todos?.map((todo) => (
                            <Todo key={todo.id} {...todo} />
                        ))}
                    </div>
                )}
            </div>
        </S.Container>
    );
};

export default Home;
