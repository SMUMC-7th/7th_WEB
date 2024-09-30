function Button({ id, task, editingId, deleteTodo, updateTodo, setEditingId, editText, setEditText }) {
  return (
    <div style={{ display: 'flex', alignContent:'flex-end' }} className='buttons'>

      <button onClick={() => deleteTodo(id)} className="deleteBtn">삭제하기</button>

      {editingId === id ? (
        <button onClick={() => updateTodo(editingId, editText)} className="editComplete">수정 완료</button>
      ) : (
        <button onClick={() => {
          setEditText(editText || task); //editText가 없으면 task 값이 입력되도록
          setEditingId(id); 
        }}
          className="editStart">수정 진행</button>
      )}
    </div>
  );
}

export default Button;
