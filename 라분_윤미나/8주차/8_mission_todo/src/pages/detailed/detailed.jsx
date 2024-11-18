import { useContext, useEffect, useState } from "react";
import fetchGetTodoList from "../../hooks/queries/useGetTodoList";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../context/TodoContext";
import * as S from "./detailed.style";

const DetailedPage = () => {
  const {
    editTitle,
    setEditTitle,
    editText,
    setEditText,
    updateTodo,
    deleteTodo,
  } = useContext(todoContext);

  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState({ title: false, content: false });
  //const [editValues, setEditValues] = useState({ title: "", content: "" });

  const nav = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchDetails = async () => {
        try {
          const response = await fetchGetTodoList(`/todo/${id}`);
          if (response) {
            console.log("가져온 데이터: ", response);
            setTodo(response);
            setEditTitle(response.title);
            setEditText(response.content);
          } else console.log("받아온 데이터 없음.");
        } catch (error) {
          console.error("데이터 가져오기 실패 : ", error);
        }
      };
      fetchDetails();
    } else {
      console.log("ID가 정의되지 않음.");
    }
  }, [id, setEditText, setEditTitle]);

  const handleEditChange = (field, value) => {
    if (field === "title") {
      setEditTitle(value);
    } else if (field === "content") {
      setEditText(value);
    }
  };
  const toggleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  const saveChanges = async () => {
    if (todo) {
      setTodo((prev) => ({
        ...prev,
        title: editTitle,
        content: editText,
      }));
    }

    setIsEditing({ title: false, content: false });
    updateTodo(todo.id);
  };

  if (!todo) return <div>Loading...</div>;

  return (
    <S.Container>
      <h3>ID:{todo.id}</h3>
      {isEditing.title ? (
        <input
          value={editTitle}
          onChange={(e) => handleEditChange("title", e.target.value)}
          onBlur={saveChanges}
        />
      ) : (
        <p onClick={() => toggleEdit("title")}>{todo.title}</p>
      )}
      {isEditing.content ? (
        <input
          value={editText}
          onChange={(e) => handleEditChange("content", e.target.value)}
          onBlur={saveChanges}
        />
      ) : (
        <p onClick={() => toggleEdit("content")}>{todo.content}</p>
      )}
      <p>Updated At: {todo.updatedAt}</p>
      <p>Status: {todo.checked === true ? "완료" : "진행 중"} </p>

      <S.Button
        className="Del_update_Button"
        onClick={() => {
          deleteTodo(todo.id);
          nav("/");
        }}
      >
        삭제하기
      </S.Button>
    </S.Container>
  );
};
export default DetailedPage;
