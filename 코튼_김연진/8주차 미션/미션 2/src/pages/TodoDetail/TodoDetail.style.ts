import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`;
const Title = styled.div`
    display: flex;
    font-size: 20px;
    width: calc(100% - 20px);
    height: 30px;
    border: 1px solid grey;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
    border-radius: 10px;
`;
const Content = styled.div`
    display: flex;
    font-size: 20px;
    width: calc(100% - 20px);
    min-height: 150px;
    border: 1px solid grey;
    align-items: cetner;
    padding: 5px 10px;
    border-radius: 10px;
`;

const Container1 = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const MainTitle = styled.div`
    display: flex;
    font-size: 30px;
    width: 100%;
    justify-content: center;
`;

const ID = styled.div`
    display: flex;
    font-size: 20px;
    margin-bottom: 10px;
    height: auto;
`;
const Container2 = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
const TitleEdit = styled.input`
    display: flex;
    font-size: 20px;
    width: calc(100% - 20px);
    height: 30px;
    border: 1px solid grey;
    align-items: center;
    margin-bottom: 10px;
    padding: 0 10px;
    border-radius: 10px;
`;
const ContentEdit = styled.textarea`
    display: flex;
    font-size: 20px;
    width: calc(100% - 20px);
    min-height: 150px;
    border: 1px solid grey;
    align-items: cetner;
    padding: 5px 10px;
    border-radius: 10px;
`;

const Checkbox = styled.input`
    z-index: 1;
`;
export {
    Container,
    Title,
    Content,
    Container1,
    MainTitle,
    ID,
    Container2,
    TitleEdit,
    ContentEdit,
    Checkbox,
};
