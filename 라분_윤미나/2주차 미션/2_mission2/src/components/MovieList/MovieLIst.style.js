import styled from 'styled-components'

const Container = styled.div`
 display : grid;
 grid-template-columns : repeat(auto-fit, minmax(140px, 1fr));
 grid-auto-rows: 270px;
`

export {Container};