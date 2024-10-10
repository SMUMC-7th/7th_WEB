import * as S from './baekjoon.style.js'
import {DATA} from "../../mocks/data.js"
import Card from '../../components/Card/card.jsx'

const Cards = () => {
    return <div style={{display:'flex', gap: '10px'}}>
        <S.Cards>
            {DATA.results.filter(data => data.category === "백준").map((data, _) => {
                console.log(_)
                return <Card key={data.id} {... data}></Card>
            })}
        </S.Cards>
    </div>
}

export default Cards;