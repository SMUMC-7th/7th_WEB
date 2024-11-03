function Button({ onClick, text, id, type = "button" }) {
  return (
    <button id={id} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
