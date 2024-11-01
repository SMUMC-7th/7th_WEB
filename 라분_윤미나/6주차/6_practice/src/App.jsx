import { useContext } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { todoContext } from "./context/TodoContext";

function App() {
  const {
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(todoContext);
  return (
    <>
      <p className="title">UMC TodoList</p>

      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button
          onClick={() => addTodo()}
          btnText="할 일 등록"
          type="submit"
        ></Button>
      </form>
      <div className="lists">
        {todos.map((todo) => (
          // eslint-disable-next-line react/jsx-key
          <div className="lists_container">
            {/* 수정이 아닐 떄 */}
            {editingId !== todo.id && (
              <div key={todo.id}>
                <p>
                  {todo.id}. {todo.task}
                </p>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <div className="lists_container" key={todo.id}>
                <p>{todo.id}.</p>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                ></Input>
              </div>
            )}
            <Button
              onClick={() => deleteTodo(todo.id)}
              btnText="삭제하기"
            ></Button>

            {editingId === todo.id ? (
              <Button
                onClick={() => updateTodo(editingId, editText)}
                btnText="수정 완료"
              ></Button>
            ) : (
              <Button
                onClick={() => setEditingId(todo.id)}
                btnText="수정 진행"
              ></Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
