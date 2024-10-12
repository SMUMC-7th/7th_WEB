import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 10px;
`

const CreditList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 16px;
`

export { Container, CreditList }