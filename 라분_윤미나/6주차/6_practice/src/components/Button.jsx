const Button = ({onClick, btnText}) =>{
    
    return(
        <button onClick={onClick}>
            {btnText}
        </button>
    );
};



export default Button