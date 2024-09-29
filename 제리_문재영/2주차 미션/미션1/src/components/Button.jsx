const Button = (props) => {
    // console.log(onClick); //{buttonName: '할 일 등록', onClick: ƒ}
    const {onClick, buttonName} = props;
    return(
        <button onClick={onClick}>
            {buttonName}
        </button>
    )
}
export default Button;