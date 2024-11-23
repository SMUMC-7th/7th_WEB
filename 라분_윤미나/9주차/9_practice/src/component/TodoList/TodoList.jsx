import { useSelector, useDispatch } from "react-redux";
import { remove, complete } from "../../redux/todoSlice";
import * as S from "./TodoList.style";

export default function TodoList() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  console.log(todoList);

  const todoListView = todoList.map((todo) => (
    <S.List key={todo.id}>
      <S.CheckBox
        type="checkbox"
        onChange={() => dispatch(complete(todo.id))}
      />
      <S.TodoList>
        {todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}
      </S.TodoList>
      <S.DeleteBtn onClick={() => dispatch(remove(todo.id))}>X</S.DeleteBtn>
    </S.List>
  ));

  return (
    <>
      <ul>{todoListView}</ul>
    </>
  );
}
