import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 200px;
`

const Profile_img = styled.div`
    background-image: url(${props => props.image});
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid white;
    background-position: center;
    background-size: cover;

`
const Name = styled.div`
    width: 110px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: center;

`

const Job = styled.div`
    width: 110px;
    color: gray;
    font-size: 15px;
    text-align: center;

`

export {Profile_img,Name,Container, Job};