function Input({ value, onChange, defaultValue, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}

export default Input;
