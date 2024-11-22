import * as S from './Home.style';
import { useEffect, ChangeEvent, useState } from 'react';
import { addTodo } from '../../apis/todo';
import { useTodoListContext } from '../../context/todoListContext';
import Error from '../../components/error/error';
import Button from '../../components/button/button';
import Todo from '../../components/todo/todo';
import useCustomFetch from '../../hook/useCustomFetch';
import { TotalTodoData } from '../../hook/useCustomFetch';
import Loading from '../../components/loading/loading';

const Home = () => {
    const { todoList, setTodoList } = useTodoListContext();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [isError, setIsError] = useState(false);

    const handleError = (error: boolean) => setIsError(error);

    const handleChangeTitleText = (e: ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

    const handleChangeContentText = (e: ChangeEvent<HTMLInputElement>) =>
        setContent(e.target.value);

    const handleAddTodo = async () => {
        const newTodo = {
            id: todoList.length + 1,
            title,
            content,
            checked: false,
        };

        try {
            const response = await addTodo(newTodo);
            if (response?.data) {
                setTodoList((prev) => [...prev, response.data]);
            }
        } catch (error) {
            console.error('Error adding todo:', error);
            setIsError(true);
        } finally {
            setTitle('');
            setContent('');
        }
    };
    const {
        data: fetchedTodos,
        isLoading,
        isError: fetchError,
    } = useCustomFetch<TotalTodoData>('todo');
    useEffect(() => {
        if (fetchedTodos) {
            setTodoList(fetchedTodos[0]);
        }
    }, [fetchedTodos, setTodoList]);
    if (isError || fetchError) return <Error />;
    if (isLoading) return <Loading />;
    const isButtonDisabled = !title.trim() || !content.trim();

    return (
        <S.Container>
            <S.Title>UMC ToDoList</S.Title>
            <S.TodoInputs>
                <input
                    type="text"
                    value={title}
                    placeholder="제목을 입력해주세요"
                    onChange={handleChangeTitleText}
                />
                <input
                    type="text"
                    value={content}
                    placeholder="내용을 입력해주세요"
                    onChange={handleChangeContentText}
                />
                <Button
                    text="Todo 생성"
                    onClick={handleAddTodo}
                    disabled={isButtonDisabled}
                />
            </S.TodoInputs>
            <div>
                {todoList.map((todo) => (
                    <Todo key={todo.id} {...todo} onError={handleError} />
                ))}
            </div>
        </S.Container>
    );
};

export default Home;
