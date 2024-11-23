import * as S from "./TodoInput.style";

const TodoInput = ({ title, content, setTitle, setContent, addTodo }) => {
  const handleAddTodo = () => {
    addTodo(title, content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.InputBox onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddTodo}>Todo 생성</button>
    </S.InputBox>
  );
};

export default TodoInput;
