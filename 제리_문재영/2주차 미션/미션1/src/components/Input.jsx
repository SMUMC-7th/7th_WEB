const Input = (props) => {
    // console.log(type); //{buttonName: '할 일 등록', onClick: ƒ}///
    const {type, value, onChange} = props;
    return(
        <input 
        type={type}
        value={value} 
        onChange={onChange} 
        ></input>
    )
}
export default Input;