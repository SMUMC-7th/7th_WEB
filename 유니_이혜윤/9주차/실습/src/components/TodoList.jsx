import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import * as S from "./TodoList.style";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoList = () => {
  const todos = useSelector((state) => state.todo); // slice name 따라 변경
  const dispatch = useDispatch();

  return (
    <S.Container>
      {todos.map((todo) => (
        <S.TodoList key={todo.id} complete={todo.complete}>
          <p onClick={() => dispatch(complete(todo.id))}>{todo.text}</p>
          <button onClick={() => dispatch(remove(todo.id))}>
            <FaRegTrashCan />
          </button>
        </S.TodoList>
      ))}
    </S.Container>
  );
};

export default TodoList;
