import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as D from "./TodoDetail.style";

const TodoDetail = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(`http://localhost:3000/todo/${id}`);
      setTodo(res.data);
    };
    fetchTodo();
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <D.Container>
      <h1>💫 Todo 💫</h1>
      <h4>제목: {todo.title}</h4>
      <p>내용: {todo.content}</p>
    </D.Container>
  );
};

export default TodoDetail;
