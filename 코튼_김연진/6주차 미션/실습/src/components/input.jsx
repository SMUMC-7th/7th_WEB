function Input({ defaultValue, onChange }) {
    return (
        <div className="container">
            <input
                defaultValue={defaultValue}
                onChange={onChange}
                className="InputBox"
            />
        </div>
    );
}

export default Input;
