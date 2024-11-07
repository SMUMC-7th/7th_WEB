import { createContext } from 'react';
import { useState } from 'react';
//데이터를 담고 있음
export const TodoContext = createContext();

// 우산을 만듬
export function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([
        { id: 1, task: '투두 만들어보기' },
        { id: 2, task: '희두 혜원 혜윤 건 찬민' },
    ]);

    const [text, setText] = useState('');
    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    const addTodo = () => {
        if (text !== '') {
            setTodos((prev) => [
                ...prev,
                { id: Math.floor(Math.random() * 100) + 2, task: text },
            ]);
        }
        setText('');
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    const updateTodo = (id, text) => {
        setTodos((prev) =>
            prev.map(
                (item) =>
                    item.id === id
                        ? { ...item, task: text !== '' ? text : item.task }
                        : item // 수정하지 않은 경우 기존 값을 유지하도록 조건 추가
            )
        );
        setEditingId('');
        setEditText(''); // 수정 완료 후 입력 필드를 초기화
    };
    return (
        <TodoContext.Provider
            value={{
                todos,
                setTodos,
                text,
                setText,
                editingId,
                setEditingId,
                editText,
                setEditText,
                handleSubmit,
                addTodo,
                deleteTodo,
                updateTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
