import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    overflow-x: hidden;
    height: calc(100% - 5rem);
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const Info = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    background-color: rgb(227 225 226);
`;
const Part = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const ProjectsBanner = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const ProjectCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export { Container, Info, Part, ProjectCard, ProjectsBanner };
