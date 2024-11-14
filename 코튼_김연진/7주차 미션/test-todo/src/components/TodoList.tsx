import { ChangeEvent, useEffect, useState } from 'react';
import { getTodoList } from '../apis/todo';
import { useTodoListContext } from '../context/TodoContext';

const TodoList = () => {
    const { todoList, setTodoList } = useTodoListContext();
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    useEffect(() => {
        const fetchTodo = async () => {
            const result = await getTodoList();
            setTodoList(result);
        };

        fetchTodo();
    }, [setTodoList]);

    const handleAddTodo = () => {
        setTodoList((prev) => [
            ...prev,
            { id: prev.length + 1, text: text, checked: false },
        ]);
        setText('');
    };

    const handleChangeTodo = (id: number) => {
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <input value={text} onChange={handleChangeText} />
                <button onClick={handleAddTodo}>추가</button>
            </div>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => handleChangeTodo(todo.id)}
                        id={String(todo.id)}
                    />
                    <label htmlFor={String(todo.id)}>{todo.text}</label>
                    <button
                        data-testid={`delete-button-${todo.id}`}
                        onClick={() => handleDeleteTodo(todo.id)}
                    >
                        삭제
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
