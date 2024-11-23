import * as S from "./TodoInput.style";

const TodoInput = ({ title, content, setTitle, setContent, addTodo }) => {
  const handleAddTodo = () => {
    addTodo(title, content);
  };

  return (
    <S.InputBox>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddTodo}>Todo 생성</button>
    </S.InputBox>
  );
};

export default TodoInput;
