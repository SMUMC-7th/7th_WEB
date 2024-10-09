import * as S from './home.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from '../../components/todo/todo.jsx';

const HomePage = () => {
    const [todos, setTodos] = useState([]); 
    const [text, setText] = useState({
        title: '',
        content: '',
    }); // 사용자가 입력하는 값 상태
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getTodolist = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/todo`);
                setTodos(response.data[0]); 
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        getTodolist(); // 초기 리스트를 한 번만 받아옴
    }, []);

    // 사용자가 입력한 값을 상태에 업데이트하는 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setText((prevText) => ({
            ...prevText,
            [name]: value, // name에 따라 title 또는 content 업데이트
        }));
    };

    // POST 요청 함수
    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작 막기
        setIsSubmitting(true);
        try {
            if (text.title !='' && text.content!='' ) {
                await axios.post(`http://localhost:3000/todo`, text); // 입력값 서버로 POST 요청
                setText({ title: '', content: '' }); // 제출 후 입력 폼 초기화
                // POST 요청 후 업데이트된 투두 리스트를 다시 서버에서 받아오기
                const response = await axios.get(`http://localhost:3000/todo`);
                setTodos(response.data); // 새로운 투두 리스트 상태로 업데이트
                window.location.reload() //submit 후 강제로 새로 고침
                setIsSubmitting(false);
            } else {
                alert("내용을 입력해주세요!");
                setIsSubmitting(false);
            }
            
        } catch (error) {
            console.error("Error posting todo:", error);
            setIsSubmitting(false);
        }
    };


    // 삭제
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`); 
            const response = await axios.get(`http://localhost:3000/todo`);
            setTodos(response.data);
            window.location.reload(); 
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    // 체크박스 변경 핸들러
    const handleCheckboxChange = async (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updatedTodos);

        try {
            const todoToUpdate = updatedTodos.find((todo) => todo.id === id);
            await axios.patch(`http://localhost:3000/todo/${id}`, todoToUpdate); // 상태 업데이트 요청
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    useEffect(() => {
        console.log(todos); // todos 상태 변화 감지
    }, [todos]);


    useEffect(() => {
        console.log(todos);
    }, [todos]);
    
    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit}> {/* 폼 제출 시 handleSubmit 실행 */}
                <S.TodoWrite>
                    <S.Input
                        type="text"
                        name="title"
                        value={text.title}
                        onChange={handleInputChange} // title 값 업데이트
                        placeholder="Title"
                    />
                    <S.InputContent
                        type="text"
                        name="content"
                        value={text.content}
                        onChange={handleInputChange} // content 값 업데이트
                        placeholder="Content"
                    />
                </S.TodoWrite>
                <S.Button type="submit" disabled={isSubmitting}>완료</S.Button> 
            </S.Form>
            <hr style={{borderTop: '1px solid #D2E1FF', width: "400px"}}/>
            <S.TodoList>
                {todos.map((todo, idx) => (
                    <Todo
                        key={idx} 
                        {...todo} 
                        onCheck={handleCheckboxChange} // 체크박스 클릭 핸들러 추가
                        onDelete={handleDelete}
                    />
                ))}
            </S.TodoList>
        </S.Container>
    );
};

export default HomePage;