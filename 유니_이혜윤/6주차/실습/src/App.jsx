import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useContext } from "react";
import { TodoContext } from "./context/TodoContext";

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
  } = useContext(TodoContext);

  return (
    <div className="container">
      <h1>🍀 Todo List 🍀</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요 :)"
        />

        <Button onClick={addTodo} type="submit" label="등록"></Button>
      </form>
      <div className="todoList">
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ display: "flex", alignItems: "center", gap: "15px" }}
          >
            {/* 수정 아닌 상태 */}
            {editingId !== todo.id && (
              <div className="list">
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}

            {/* 수정 중 상태 */}
            {editingId === todo.id && (
              <div className="list">
                <p>{todo.id}.</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}

            <div className="buttons">
              <Button onClick={() => deleteTodo(todo.id)} label="삭제"></Button>

              {editingId === todo.id ? (
                <Button
                  onClick={() => updateTodo(editingId, editText)}
                  label="수정완료"
                ></Button>
              ) : (
                <Button
                  onClick={() => setEditingId(todo.id)}
                  label="수정"
                ></Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
