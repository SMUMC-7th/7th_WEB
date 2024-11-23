import * as S from './Todo.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useFetchTodo from '../../hooks/useFetchTodo';

const Todo = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newContent, setNewContent] = useState(todo.content);

  // 1. 체크박스 수정
  const handleChangeChecked = (e) => {
    setIsChecked(!todo.checked);
  };

  // 2. todo 수정하기 버튼 클릭 -> (수정 완료 버튼으로 변경)
  // 2-1. title, content가 input으로 변경 (텍스트 수정 가능하도록)
  const handleEditTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const handleEditContent = (e) => {
    setNewContent(e.target.value);
  };

  // 2-2. 수정된 값을 patch 요청
  const { requestTodo, isLoading, isError } = useFetchTodo(
    `/todo/${todo.id}`,
    'patch'
  );

  const handleEditTodo = (e) => {
    //  값이 변경된 요소만 넣어서 보내도록 함.
    const updateContent = {};
    if (todo.checked !== isChecked) {
      updateContent.checked = isChecked;
    }
    if (todo.title !== newTitle && newTitle.trim() !== '') {
      updateContent.title = newTitle;
    }
    if (todo.content !== newContent && newContent.trim() !== '') {
      updateContent.content = newContent;
    }

    requestTodo(updateContent);
    setIsEdit(false);
  };

  // 3. 투두 삭제
  const {
    requestTodo: deleteTodo,
    isLoading: isdeleting,
    isError: isDeleteError,
  } = useFetchTodo(`/todo/${todo.id}`, 'delete');
  const handleDeleteTodo = async (todoId) => {
    const response = deleteTodo();
    if (response) {
      console.log(response);
    }
  };

  // 투두 상세보기로 페이지 이동
  const nav = useNavigate();

  const goToDetail = () => {
    nav(`/todo/${todo.id}`);
  };

  return (
    <S.TodoBox>
      <S.ContentBox>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={handleChangeChecked}
          disabled={!isEdit}
        />
        <S.TextContainer>
          {isEdit ? (
            <S.InputContainer>
              <input value={newTitle} onChange={handleEditTitle} />
              <input value={newContent} onChange={handleEditContent} />
            </S.InputContainer>
          ) : (
            <S.LabelContainer onClick={goToDetail}>
              <label htmlFor={todo.id}>{newTitle}</label>
              <label htmlFor={todo.id}>{newContent}</label>
            </S.LabelContainer>
          )}
        </S.TextContainer>
      </S.ContentBox>
      <S.BtnContainer>
        {isEdit ? (
          <S.Button onClick={() => handleEditTodo()}>수정 완료</S.Button>
        ) : (
          <>
            <S.Button onClick={() => setIsEdit(true)}>수정</S.Button>
            <S.Button onClick={() => handleDeleteTodo(todo.id)}>삭제</S.Button>
          </>
        )}
      </S.BtnContainer>
    </S.TodoBox>
  );
};

export { Todo };
