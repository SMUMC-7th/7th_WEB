import React from 'react';

function Button({ id, editingId, deleteTodo, updateTodo, setEditingId, editText, setEditText }) {
  return (
    <div style={{ display: 'flex', alignContent:'flex-end' }} className='buttons'>
      <button onClick={() => deleteTodo(id)} className="deleteBtn">삭제하기</button>
      {editingId === id ? (
        <button onClick={() => updateTodo(id, editText)} className="editComplete">수정 완료</button>
      ) : (
        <button onClick={() => {
          setEditText(editText); // 수정 진행 버튼 클릭 시 editText 설정
          setEditingId(id); 
        }}
          className="editStart">수정 진행</button>
      )}
    </div>
  );
}

export default Button;
