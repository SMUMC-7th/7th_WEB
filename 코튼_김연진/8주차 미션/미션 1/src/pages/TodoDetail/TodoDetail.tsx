import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneTodo, deleteTodo, updateTodo } from '../../apis/todo';
import * as S from './TodoDetail.style';
import Button from '../../components/button/button';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const TodoDetail = () => {
    const { id } = useParams();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchTodo = async () => {
            setIsLoading(true);
            try {
                const response = await getOneTodo(Number(id));
                setTitle(response?.title || '');
                setContent(response?.content || '');
                setChecked(response?.checked || false);
            } catch (error) {
                console.error('Error fetching todo:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTodo();
    }, [id]);

    const handleDeleteTodo = async (id: number) => {
        try {
            await deleteTodo(id);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleUpdateTodo = async (id: number) => {
        const updatedTodo = { id, title, content, checked };
        try {
            await updateTodo(updatedTodo, id);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const handleChangeTitleText = (e: ChangeEvent<HTMLInputElement>) =>
        setTitle(e.target.value);

    const handleChangeContentText = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setContent(e.target.value);

    const handleChangeCheck = async (e: ChangeEvent<HTMLInputElement>) => {
        const updatedChecked = e.target.checked;
        setChecked(updatedChecked);
        try {
            await updateTodo({ checked: updatedChecked }, Number(id));
        } catch (error) {
            console.error('Error updating check status:', error);
        }
    };

    const isButtonDisabled = !title.trim() || !content.trim();

    if (isLoading) return <Loading />;
    if (isError) return <Error />;

    return (
        <S.Container>
            <S.Container1>
                <S.Checkbox
                    type="checkbox"
                    checked={checked}
                    onChange={handleChangeCheck}
                />
                <S.MainTitle>SMUMC</S.MainTitle>
            </S.Container1>
            <S.ID>#{id}번째 todo</S.ID>
            {!isEdit ? (
                <>
                    <S.Title>{title}</S.Title>
                    <S.Content>{content}</S.Content>
                    <S.Container2>
                        <Button
                            text="수정"
                            onClick={() => setIsEdit(true)}
                            disabled={false}
                        />
                        <Button
                            text="삭제"
                            onClick={() => handleDeleteTodo(Number(id))}
                            disabled={false}
                        />
                    </S.Container2>
                </>
            ) : (
                <>
                    <S.TitleEdit
                        defaultValue={title}
                        onChange={handleChangeTitleText}
                    />
                    <S.ContentEdit
                        defaultValue={content}
                        onChange={handleChangeContentText}
                    />
                    <S.Container2>
                        <Button
                            text="수정 완료"
                            onClick={() => {
                                handleUpdateTodo(Number(id));
                                setIsEdit(false);
                            }}
                            disabled={isButtonDisabled}
                        />
                    </S.Container2>
                </>
            )}
        </S.Container>
    );
};

export default TodoDetail;
