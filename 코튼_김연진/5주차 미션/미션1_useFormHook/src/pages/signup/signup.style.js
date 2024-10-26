import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const Text = styled.div`
    color: white;
    margin: 10px;
    font-size: 25px;
`;

const Input = styled.input`
    width: calc(100% - 9px);
    height: 40px;
    border-radius: 5px;
    border: none;
    padding-left: 7px;
`;

const Error = styled.div`
    color: red;
    font-size: 15px;
    margin-left: 3px;
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${(props) => (props.disabled ? 'grey' : '#FF1E9D')};
    border: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    &:hover {
        background-color: ${(props) => (props.disabled ? 'grey' : 'white')};
        color: ${(props) => (props.disabled ? 'white' : 'black')};
    }
`;
const Radio = styled.input`
    display: none;
`;

const Label = styled.label`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RadioDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
`;

const Gender = styled.div`
    display: flex;
    background-color: ${(props) => (props.checked ? '#FF1E9D' : 'grey')};
    width: 140px;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 5px;
`;

const Birth = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const BirthInput = styled(Input)`
    width: 80px;
    height: 40px;
    position: relative;
`;

const Select = styled.select`
    width: 80px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
`;

const Container2 = styled(Container)`
    display: flex;
    flex-direction: column;
    max-width: 280px;
    gap: 10px;
`;

export {
    Container,
    Container2,
    Text,
    Input,
    Error,
    Button,
    Radio,
    Label,
    RadioDiv,
    Gender,
    Birth,
    BirthInput,
    Select,
};
