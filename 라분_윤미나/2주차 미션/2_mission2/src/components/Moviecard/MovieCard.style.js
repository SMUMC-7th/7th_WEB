import styled from 'styled-components';

const Container = styled.div`
width : 140px;
height: 200px;
background-color: pink;
position : relative;

img{
    width : 140px;
    height: 200px;
}
`
const Backdrop = styled.div`
    width : 140px;
    height: 200px;
    background-color: rgba(0,0,0,0.4);
    position : absolute;
    top :0;
    left :0;
`

export{Container, Backdrop}