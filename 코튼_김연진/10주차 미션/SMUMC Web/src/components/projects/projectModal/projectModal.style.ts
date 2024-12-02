import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { LuLink } from 'react-icons/lu';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
`;

const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.5;
    position: absolute;
`;

const Modal = styled.div`
    display: flex;
    background-color: #fff;
    height: 500px;
    width: 400px;
    flex-direction: column;
    opacity: 1;
    gap: 10px;
    align-items: center;
    position: relative;
    padding: 20px;
    border-radius: 10px;
`;

const Xbutton = styled.button`
    background-color: white;
    border: none;
    margin-left: auto;
    font-size: 20px;
    font-weight: 600;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 23px;
`;

const HeaderTitle = styled.div`
    font-weight: 600;
    font-size: 20px;
`;

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
    flex-direction: column;
    margin-top: 10px;
    display: flex;
    gap: 15px;
    align-items: center;

    img {
        width: 400px;
        height: 240px;
        object-fit: cover;
        border-radius: 20px;
    }
`;

const SubTitle = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
`;

const Description = styled.div`
    display: flex;
    width: 100%;
`;

const Names = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
`;

const Name = styled.div`
    display: flex;
`;

const Stacks = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    right: 30px;
    bottom: 150px;
    position: absolute;
    gap: 5px;
`;

const Stack = styled.div`
    background-color: var(--color-green-main);
    border-radius: 30px;
    color: white;
    font-size: 11px;
    padding: 5px 10px;
    font-size: 13px;
`;

const GithubIcon = styled(FaGithub)`
    width: 20px;
    height: 20px;
    color: black;
`;

const LinkIcon = styled(LuLink)`
    width: 20px;
    height: 20px;
    color: black;
`;

const CloseBtn = styled(IoCloseOutline)`
    width: 20px;
    height: 20px;
`;

const OutGitLink = styled(Link)`
    width: 20px;
    height: 20px;
`;
const OutProjLink = styled(Link)`
    width: 20px;
    height: 20px;
`;

const LinkButtons = styled.div`
    position: absolute;
    display: flex;
    right: 30px;
    gap: 10px;
    top: 75px;
`;
export {
    LinkButtons,
    CloseBtn,
    Container,
    Backdrop,
    Modal,
    Xbutton,
    Title,
    Header,
    Content,
    HeaderTitle,
    Stack,
    Stacks,
    Name,
    Names,
    Description,
    SubTitle,
    GithubIcon,
    LinkIcon,
    OutGitLink,
    OutProjLink,
};
