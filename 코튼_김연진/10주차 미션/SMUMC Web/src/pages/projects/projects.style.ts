import styled from 'styled-components';
interface ContainerProps {
    islight: boolean;
}
const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.div<ContainerProps>`
    display: flex;
    font-size: var(--size-title);
    font-weight: var(--weight-title);
    color: ${(props) => (props.islight ? 'black' : '#e0e0e0')};
`;

const Projects = styled.div`
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;
const Generations = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

const Generation = styled.button<{ $isclicked: boolean } & ContainerProps>`
    font-size: 20px;
    border: none;
    background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
    color: ${({ $isclicked, islight }) =>
        $isclicked ? 'var(--color-green-main)' : islight ? 'black' : '#e0e0e0'};
    text-decoration: ${({ $isclicked }) => ($isclicked ? 'underline' : 'none')};
    text-underline-offset: 4px;
`;
export { Container, Title, Projects, Generations, Generation };
