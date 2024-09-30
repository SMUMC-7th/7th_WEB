function Input({defaultValue, onChange}) {
  return (
    <div className="container">
        <input 
          defaultValue={defaultValue}
          onChange={onChange}
        />
    </div>
  );
}

export default Input;
