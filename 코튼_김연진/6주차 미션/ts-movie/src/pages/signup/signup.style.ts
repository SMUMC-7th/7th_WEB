import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    color: white;
    margin: 10px;
    font-size: 25px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 10px;
`;

const Input = styled.input`
    max-width: 280px;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 0;
    padding-left: 5px;
    box-sizing: border-box;
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
    border-radius: 5px;
    color: white;
    font-size: 15px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
        background-color: ${(props) => (props.disabled ? 'grey' : 'white')};
        color: ${(props) => (props.disabled ? 'white' : 'black')};
    }
`;

export { Container, Text, Form, Input, Error, Button };
