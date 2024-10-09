import styled from "styled-components";
const Container = styled.div`
    display: flex;
    width: 700px;
    color: white;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

const Container2 = styled(Container)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

`
const Title = styled.div`
    display: flex;
    color: white;
    font-size: 20px;
    margin-left: 50px;
`
const Text = styled.div`
    display: flex;
    color: white;
    width: 250px;
`
const Texts = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;
    height: 100%;
`
const Img = styled.img`
    max-width: 250px;
    max-height: 250px;
    border-radius: 10px;
`
export {Container, Container2,Title, Text, Img, Texts}