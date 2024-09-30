function Input(props) {
  const {defaultValue, onChange} =props;
  console.log(defaultValue, onChange);
  const text = {onChange}
  console.log(text);
  return (
    <div style={{display:'flex'}}>
        <input 
          defaultValue={defaultValue}
          onChange={onChange}
        />
    </div>
  );
}

export default Input;
