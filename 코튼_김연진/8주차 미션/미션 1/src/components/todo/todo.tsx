import { useState, ChangeEvent } from 'react';
import { deleteTodo, updateTodo } from '../../apis/todo';
import Button from '../../components/button/button';
import { useTodoListContext } from '../../context/todoListContext';
import * as S from './todo.style';

interface TTodo {
    id: number;
    title: string;
    content: string;
    checked: boolean;
}
const Todo = (props: {
    id: number;
    title: string;
    content: string;
    checked: boolean;
    onError: (error: boolean) => void;
}) => {
    const { id, title, content, checked, onError } = props;

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState<string>(title);
    const [newContent, setNewContent] = useState<string>(content);
    const [newChecked, setNewChecked] = useState<boolean>(checked);

    const { setTodoList } = useTodoListContext();

    const handleDeleteTodo = async (id: number) => {
        try {
            await deleteTodo(id);
            setTodoList((prev) => prev.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
            onError(true);
        }
    };

    const handleUpdateTodo = async (id: number) => {
        const updatedTodo: TTodo = {
            id,
            title: newTitle,
            content: newContent,
            checked: newChecked,
        };
        try {
            setTodoList((prev) =>
                prev.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
            await updateTodo(updatedTodo, id);
        } catch (error) {
            console.error('Error updating todo:', error);
            onError(true);
        }
    };

    const handleChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const updatedChecked = e.target.checked;
        const updatedTodo = {
            id,
            title,
            content,
            checked: updatedChecked,
        };

        setNewChecked(updatedChecked);
        setTodoList((prev) =>
            prev.map((todo) => (todo.id === id ? updatedTodo : todo))
        );
        updateTodo(updatedTodo, id);
    };
    const isButtonDisabled = !title.trim() || !content.trim();

    return (
        <S.Container>
            <S.Checkbox
                type="checkbox"
                checked={checked}
                onChange={handleChangeCheck}
                aria-label="Mark as completed"
            />
            {!isEditing ? (
                <S.Texts to={`/todo/${id}`}>
                    <S.Title>{title}</S.Title>
                    <S.Content>{content}</S.Content>
                </S.Texts>
            ) : (
                <S.Texts to={''}>
                    <S.TitleEdit
                        defaultValue={title}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <S.ContentEdit
                        defaultValue={content}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                </S.Texts>
            )}
            <S.Buttons>
                {!isEditing ? (
                    <>
                        <Button
                            text="수정"
                            onClick={() => setIsEditing(true)}
                            disabled={false}
                        />
                        <Button
                            text="삭제"
                            onClick={() => handleDeleteTodo(id)}
                            disabled={false}
                        />
                    </>
                ) : (
                    <Button
                        text="수정완료"
                        onClick={() => {
                            setIsEditing(false);
                            handleUpdateTodo(id);
                        }}
                        disabled={isButtonDisabled}
                    />
                )}
            </S.Buttons>
        </S.Container>
    );
};

export default Todo;
