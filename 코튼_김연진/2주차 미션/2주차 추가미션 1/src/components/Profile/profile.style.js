import styled from "styled-components";
import tempImage from "./chanaping.webp";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 200px;
    align-items: center; /* 가로 중앙 정렬 */
    justify-content: center; /* 세로 중앙 정렬 */
    gap: 10px;
    text-align: center;
    border: 1px solid #bebebe;
    border-radius: 10px;
    padding: 10px;
`;

const ProfileImage = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(${tempImage});
    background-size: cover;
    background-position: center;
`;

const NickName = styled.h4`
    margin: 0;
`;

const Description = styled.h6`
    margin: 0;
    color: grey;
`;

const Lucky = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 30px;
    border: none;
    background-color: black;
    color: white;
`;

export { Container, ProfileImage, NickName, Description, Lucky };