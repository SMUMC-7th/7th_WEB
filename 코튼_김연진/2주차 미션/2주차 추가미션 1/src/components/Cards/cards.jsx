import * as S from './cards.style'
import {DATA} from "../../mocks/data.js"
import Card from '../Card/card.jsx'

const Cards = () => {
    return <S.Cards>
        {DATA.results.map((data, _) => {
            console.log(_)
            return <Card key={data.id} {... data}></Card>
        })}
    </S.Cards>
}

export default Cards;