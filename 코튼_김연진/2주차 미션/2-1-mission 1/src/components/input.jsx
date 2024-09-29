function Input({ id, editingId, defaultValue, setEditText}) {
  return (
    <div style={{display:'flex'}}>
      {id === editingId ? (
        <input 
          defaultValue={defaultValue}
          onChange={(e) => setEditText(e.target.value)} 
        />
      ) : null}
    </div>
  );
}

export default Input;
