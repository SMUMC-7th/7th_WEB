import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./TodoPage.style";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editingContent, setEditingContent] = useState("");

  const navigate = useNavigate();

  // console.log(todos);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // post
    await axios.post(`http://localhost:3000/todo`, {
      title: title,
      content: content,
    });

    getTodos();
    setTitle("");
    setContent("");
  };

  // get
  const getTodos = async () => {
    const res = await axios.get(`http://localhost:3000/todo`);
    setTodos(res.data);

    console.log(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // patch
  const onPatchHandler = async (id) => {
    await axios.patch(`http://localhost:3000/todo/${id}`, {
      content: editingContent,
    });
    setEditingId(null);
    getTodos();
  };

  const onEditHandler = (todo) => {
    setEditingId(todo.id);
    setEditingContent(todo.content);
  };

  // delete
  const onDeleteHandler = async (id) => {
    await axios.delete(`http://localhost:3000/todo/${id}`);
    getTodos();
  };

  // detailPage
  const onDetailPageHandler = (id) => {
    navigate(`/todo/${id}`);
  };

  return (
    <S.Container>
      <h1>Todo List ✍🏻</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요 :D"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요 :)"
        />
        <button type="submit">+</button>
      </form>

      <S.TodoContainer>
        <S.Todo>
          <h4>Todo</h4>
          {todos[0]?.map((e) => (
            <S.Content key={e.id}>
              <S.Text onChange={(e) => setEditingContent(e.target.value)}>
                <h5>{e.title}</h5>
                {editingId === e.id ? (
                  <input value={editingContent} />
                ) : (
                  <p onClick={() => onDetailPageHandler(e.id)}>{e.content}</p>
                )}
              </S.Text>
              <S.Button>
                <button
                  onClick={() =>
                    editingId === e.id ? onPatchHandler(e.id) : onEditHandler(e)
                  }
                >
                  {editingId === e.id ? "저장" : "수정"}
                </button>
                <button onClick={() => onDeleteHandler(e.id)}>삭제</button>
              </S.Button>
            </S.Content>
          ))}
        </S.Todo>
      </S.TodoContainer>
    </S.Container>
  );
};

export default TodoPage;
