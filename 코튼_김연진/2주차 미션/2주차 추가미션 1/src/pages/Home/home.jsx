import * as S from './home.style'
import {DATA} from "../../mocks/data.js"
import Card from '../../components/Card/card.jsx'
import Sidebar from '../../components/Sidebar/sidebar.jsx'

const Cards = () => {
    return <div style={{display:'flex', gap: '10px'}}>
        <Sidebar></Sidebar>
        <S.Cards>
            {DATA.results.map((data, _) => {
                console.log(_)
                return <Card key={data.id} {... data}></Card>
            })}
        </S.Cards>
    </div>
}

export default Cards;