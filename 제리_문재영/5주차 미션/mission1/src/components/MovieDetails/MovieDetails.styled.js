import styled from "styled-components";

const ImgContainer = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 100%;
    min-width: 700px;
    height: 300px;
    z-index: 1;
    position: relative;
`

const GrayBox = styled.div`
    height: 300px;
    width: 40%;
    background-color: rgba(128, 128, 128, 0.3);
    position: relative;
    z-index: 2;
`

const Text = styled.div`
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.bold || 'none'};
    color: white;
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 3;
`
const Profile_lst = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;   
    justify-content: center;

`

export {ImgContainer, GrayBox, Text,Profile_lst};