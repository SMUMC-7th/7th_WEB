import Card from "./Card";
import contents from "../mocks/contents";

function Cards(){
    return(
        <div>
            {contents.map((content,idx) =>(
                <Card key={content.id} {...content}/>
            ))}
        </div>
        // 카드반복문, map사용
    )
}
export default Cards;