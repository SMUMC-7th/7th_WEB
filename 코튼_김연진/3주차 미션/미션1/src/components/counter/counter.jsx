// import {Container, Text} from  './counter.style'
import * as S from './counter.style' // *은 전체를 불러오=겠다. S는 별 의미 없고 그냥 Styled Components 앞 글자 따온거임.

const Counter = ({count}) => {
    console.log(count)
    return <div>
                <S.Text>Count {count}</S.Text>
            </div>
}

export default Counter


// const Counter = () => {
//     return <Container>
//                 <Text>카운트</Text>
//             </Container>
// }

// export default Counter; 