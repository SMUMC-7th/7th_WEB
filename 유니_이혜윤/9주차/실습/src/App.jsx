import * as S from "./App.style";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <S.Container>
      <S.TodoBox>
        <InputTodo />
        <TodoList />
      </S.TodoBox>
    </S.Container>
  );
}

export default App;
