import * as S from './counter.style'

const Counter = (count) => {
  return (
    <div>
      <S.Text>{count}</S.Text>
    </div>
  )
}

export default Counter;