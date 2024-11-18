/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneTodo, deleteTodo, updateTodo } from '../../apis/todo';
import * as S from './TodoDetail.style';
import Button from '../../components/button/button';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryClient } from '../../main';
type TTodo = {
    id: number;
    title: string;
    content: string;
    checked: boolean;
};

const TodoDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        data: todo,
        isLoading,
        isError,
        error: fetchError,
    } = useQuery<TTodo, Error>({
        queryKey: ['todo', id],
        queryFn: () => getOneTodo(Number(id)),
    });
    const [isEdit, setIsEdit] = useState(false);
    const [newTitle, setNewTitle] = useState<string>('');
    const [newContent, setNewContent] = useState<string>('');
    const [newChecked, setNewChecked] = useState<boolean>(
        todo?.checked || false
    );

    useEffect(() => {
        if (todo) {
            setNewTitle(todo?.title);
            setNewContent(todo?.content);
            setNewChecked(todo?.checked);
        }
    }, [todo]);

    const { mutate: deleteTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todo'],
            });
            navigate('/');
        },
    });

    const { mutate: patchTodoMutation } = useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todo'],
            });
        },
    });

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    return (
        <S.Container>
            <S.Container1>
                <S.Checkbox
                    type="checkbox"
                    checked={todo?.checked}
                    onClick={() => setNewChecked(!newChecked)}
                    onChange={(e) => {
                        patchTodoMutation({
                            id: Number(id),
                            checked: newChecked,
                            title: todo?.title || '',
                            content: todo?.content || '',
                        });
                    }}
                />
                <S.MainTitle>SMUMC</S.MainTitle>
            </S.Container1>
            <S.ID>#{id}번째 todo</S.ID>
            {!isEdit ? (
                <>
                    <S.Title>{todo?.title}</S.Title>
                    <S.Content>{todo?.content}</S.Content>
                    <S.Container2>
                        <Button
                            text="수정"
                            onClick={() => setIsEdit(true)}
                            disabled={false}
                        />
                        <Button
                            text="삭제"
                            onClick={() => deleteTodoMutation(Number(id))}
                            disabled={false}
                        />
                    </S.Container2>
                </>
            ) : (
                <>
                    <S.TitleEdit
                        defaultValue={todo?.title}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <S.ContentEdit
                        defaultValue={todo?.content}
                        onChange={(e) => setNewContent(e.target.value)}
                    />
                    <S.Container2>
                        <Button
                            text="수정 완료"
                            onClick={() => {
                                setIsEdit(false);
                                patchTodoMutation({
                                    id: Number(id),
                                    checked: newChecked,
                                    title: newTitle,
                                    content: newContent,
                                });
                            }}
                            disabled={false}
                        />
                    </S.Container2>
                </>
            )}
        </S.Container>
    );
};

export default TodoDetail;
