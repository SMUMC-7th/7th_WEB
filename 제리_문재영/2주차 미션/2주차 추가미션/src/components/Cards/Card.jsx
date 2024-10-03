function Card (props){
    return(
        <div className="card">
            <img src="" alt="" />
            <div>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-content">{props.content}</p>
            <p className="card-tips">{props.tips}</p>
        
            </div>
        </div>
    )
}
export default Card;