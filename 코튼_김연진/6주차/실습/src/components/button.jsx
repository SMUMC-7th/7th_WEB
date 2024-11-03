function Button(props) {
    const { text, onClick } = props;
    return (
        <button onClick={onClick} className="button">
            {text}
        </button>
    );
}

export default Button;
