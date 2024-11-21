import { useState } from 'react';
import { deleteTodo, updateTodo } from '../../apis/todo';
import Button from '../button/button';
import * as S from './todo.style';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../main';

const Todo = (props: {
    id: number;
    title: string;
    content: string;
    checked: boolean;
}) => {
    const { id, title, content, checked } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState<string>(title);
    const [newContent, setNewContent] = useState<string>(content);
    const { mutate: deleteTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
    });

    const { mutate: patchTodoMutation } = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos'],
            });
        },
    });

    const isButtonDisabled = !title.trim() || !content.trim();

    return (
        <S.Container>
            <S.Checkbox
                type="checkbox"
                checked={checked}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onChange={(e) => {
                    patchTodoMutation({
                        id: id,
                        checked: !checked,
                        title: title,
                        content: content,
                    });
                }}
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
                            onClick={() => deleteTodoMutation(id)}
                            disabled={false}
                        />
                    </>
                ) : (
                    <Button
                        text="수정완료"
                        onClick={() => {
                            setIsEditing(false);
                            patchTodoMutation({
                                id: id,
                                checked: checked,
                                title: newTitle,
                                content: newContent,
                            });
                        }}
                        disabled={isButtonDisabled}
                    />
                )}
            </S.Buttons>
        </S.Container>
    );
};

export default Todo;
