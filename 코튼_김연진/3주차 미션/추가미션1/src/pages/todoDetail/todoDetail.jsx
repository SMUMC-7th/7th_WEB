import * as S from './todoDetail.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const [text, setText] = useState({
        title: '',
        content: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setText((prevText) => ({
            ...prevText,
            [name]: value,
        }));
    };
    useEffect(() => {
        const getTodo = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/todo/${id}`);
                setText(response.data);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        getTodo();
    }, [id]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`);
            window.location.href = '/';
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <S.Container>
            {!isEditing ? (
                <>
                    <S.TodoInfo>
                        <S.Box>
                            <S.Explain>제목:</S.Explain>
                            <S.Title>{text.title}</S.Title>
                        </S.Box>
                        <S.ContentBox>
                            <S.Explain>내용:</S.Explain>
                            <S.Content>{text.content}</S.Content>
                        </S.ContentBox>
                    </S.TodoInfo>
                    <S.Buttons>
                        <S.Button onClick={() => setIsEditing(true)}>수정하기</S.Button>
                        <S.Button onClick={() => handleDelete(id)}>삭제하기</S.Button>
                    </S.Buttons>
                </>
            ) : (
                <>
                    <S.TodoInfo>
                        <S.Box>
                            <S.Explain>제목:</S.Explain>
                            <S.Input 
                                name="title" 
                                value={text.title} 
                                onChange={handleInputChange} 
                            />
                        </S.Box>
                        <S.ContentBox>
                            <S.Explain>내용:</S.Explain>
                            <S.InputContent 
                                name="content" 
                                value={text.content} 
                                onChange={handleInputChange} 
                            />
                        </S.ContentBox>
                    </S.TodoInfo>
                    <S.Buttons>
                        <S.Button onClick={async () => {
                            try {
                                await axios.patch(`http://localhost:3000/todo/${id}`, text); // 수정된 데이터 전송
                                setIsEditing(false); // 수정 모드 종료
                                window.location.href = '/';
                            } catch (error) {
                                console.error("Error updating todo:", error);
                            }
                        }}>수정완료</S.Button>
                        <S.Button onClick={() => handleDelete(id)}>삭제하기</S.Button>
                    </S.Buttons>
                </>
            )}
        </S.Container>
    );
};

export default TodoDetail;