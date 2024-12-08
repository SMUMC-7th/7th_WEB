import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 12.5rem;
    height: 19rem;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    margin: 3px;
    position: relative;
    background-color: #ffffff;
`;

const Type = styled.div`
    display: flex;
    font-size: 20px;
`;

const Name = styled.div`
    display: flex;
    font-size: 30px;
    font-weight: 600;
`;

const Part = styled.div`
    display: flex;
    font-size: 20px;
`;

const Content = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
`;

const ImgContainer = styled.div`
    width: 100%;
    height: 11rem;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: ceenter;
    height: 11rem;
`;

const GithubIcon = styled(FaGithub)`
    width: 20px;
    height: 20px;
    color: black;
`;

const GitLink = styled(Link)`
    position: absolute;
    top: 185px;
    left: 10px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const AlternativeImg = styled.img`
    margin: 40px;
    width: 110px;
    height: 110px;
    object-fit: cover;
`;
export {
    Container,
    Type,
    Name,
    Part,
    Content,
    ImgContainer,
    GithubIcon,
    GitLink,
    Img,
    AlternativeImg,
};
