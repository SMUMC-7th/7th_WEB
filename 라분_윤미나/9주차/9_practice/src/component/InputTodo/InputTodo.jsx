import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/todoSlice";
import * as S from "./InputTodo.style";

export default function InputTodo() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ text: e.target.value });
  }

  function onReset() {
    setTodolist({ text: "" });
  }

  return (
    <S.InputTodo>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          } else alert("할 일을 입력해주세요!");
          onReset();
        }}
      >
        <div>
          <S.TextBar type="text" value={todolist.text} onChange={handleText} />
          <S.SubmitButton type="submit" value="+" />
        </div>
      </form>
    </S.InputTodo>
  );
}
