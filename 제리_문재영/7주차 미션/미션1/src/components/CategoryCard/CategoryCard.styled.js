import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    filter: brightness(0.7);
  }
  position: relative;
`
const Text = styled.div`
    color: ${props => props.color || 'white'};
    z-index: 1;
    position: absolute;
    background-color: rgb(100,100,100);
    border-radius: 5px;
    top: 5px;
    left: 5px;
    padding: 3px;
`
const ImgBox = styled.img`
    width: 350px;
    height: 213px;
`
const ImgLink = styled(Link)`
    width: 350px;
`

export {Container, Text, ImgLink, ImgBox}