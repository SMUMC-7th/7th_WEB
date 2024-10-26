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

const Form = styled.form`
    display: flex;
    gap: 10px;
    flex-direction: column;
`;

const Input = styled.input`
    width: 250px;
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
    width: 259px;
    height: 40px;
    background-color: ${(props) => (props.disabled ? 'grey' : '#FF1E9D')};
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    &: hover {
        background-color: ${(props) => (props.disabled ? 'grey' : 'white')};
        color: ${(props) => (props.disabled ? 'white' : 'black')};
    }
`;

export { Container, Text, Form, Input, Error, Button };
