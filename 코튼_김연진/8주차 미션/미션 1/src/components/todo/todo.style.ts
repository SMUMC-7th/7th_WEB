import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    width: calc(100% - 10px);
    height: 60px;
    flex-direction: row;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    margin: 10px 0;
    padding: 5px;
    gap: 10px;
    align-items: center;
`;

const Checkbox = styled.input`
    z-index: 1;
`;

const Title = styled.div`
    display: block;

    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

const Content = styled.div`
    display: block;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
`;

const Texts = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: calc(100% - 150px);
    gap: 5px;
    text-decoration: none;
    color: black;
`;
const Buttons = styled.div`
    width: 160px;
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    margin-left: auto;
    padding-right: 10px;
    z-index: 1;
`;

const TitleEdit = styled.input``;
const ContentEdit = styled.input``;
export {
    Container,
    Checkbox,
    Title,
    Content,
    Texts,
    Buttons,
    TitleEdit,
    ContentEdit,
};
