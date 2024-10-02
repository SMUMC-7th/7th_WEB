function Card (props){
    const {title, content, tip} = props;
    return(
        <div className="card">
            <img src="" alt="" />
            <div>
            <h3 className="card-title"></h3>
            <p className="card-content"></p>
            <p className="card-tips"></p>
        
            </div>
        </div>
    )
}
export default Card;