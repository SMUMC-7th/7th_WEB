import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./TodoDetail.style";

const TodoDetail = () => {
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 상태
  const [editTitle, setEditTitle] = useState(""); // 수정할 제목
  const [editContent, setEditContent] = useState(""); // 수정할 내용
  const { id } = useParams();
  const navigate = useNavigate();

  // todo 상세 조회 - get
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

  // todo 수정 - patch
  const updateTodo = async () => {
    if (!editTitle || !editContent) {
      alert("제목과 내용을 입력해주세요!");
      return;
    }

    try {
      await axios.patch(`http://localhost:3000/todo/${id}`, {
        title: editTitle,
        content: editContent,
      });
      setTodo({
        ...todo,
        title: editTitle,
        content: editContent,
      });
      setIsEditing(false);
      alert("Todo가 수정되었습니다.");
    } catch (error) {
      console.error("PATCH 요청 실패", error);
      alert("Todo 수정에 실패했습니다.");
    }
  };

  // todo 삭제 - delete
  const deleteTodo = async () => {
    try {
      await axios.delete(`http://localhost:3000/todo/${id}`);
      alert("Todo가 삭제되었습니다.");
      navigate("/");
    } catch (error) {
      console.error("DELETE 요청 실패", error);
      alert("Todo 삭제에 실패했습니다.");
    }
  };

  if (!todo) {
    return <div>Loading...</div>;
  }

  //console.log(todo);

  return (
    <S.Container>
      <h1>Todo</h1>
      {isEditing ? (
        <S.DetailEdit>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <div>
            <button onClick={updateTodo}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </div>
        </S.DetailEdit>
      ) : (
        <>
          <h3>제목: {todo.title}</h3>
          <p>내용: {todo.content}</p>
          <p>id: {todo.id}</p>
          <p>작성일: {todo.createdAt}</p>
          <div>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={deleteTodo}>삭제</button>
          </div>
        </>
      )}
    </S.Container>
  );
};

export default TodoDetail;
