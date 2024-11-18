import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./TodoDetail.style";

const TodoDetail = () => {
  const [todo, setTodo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/todo/${id}`);
        setTodo(res.data);
      } catch (error) {
        console.error("get 요청 실패", error);
        alert("Todo 상세 조회에 실패했습니다.");
      }
    };

    fetchTodo();
  }, [id]); // id가 변경될 때마다 Todo를 가져와

  if (!todo) {
    return <div>Loading...</div>;
  }

  //console.log(todo);

  return (
    <S.Container>
      <h1>Todo</h1>
      <h3>제목 : {todo.title}</h3>
      <p>내용 : {todo.content}</p>
      <p>id : {todo.id}</p>
      <p>{todo.createdAt}</p>
      {/* 추가적인 Todo 상세 정보들을 여기서 표시 */}
    </S.Container>
  );
};

export default TodoDetail;
