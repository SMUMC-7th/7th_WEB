import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 10px;
    margin-top: 150px;
`;

const Text = styled.div`
    color: white;
    margin: 10px;
    font-size: 25px;
    align-self: flex-start;
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
    height: 45px;
    background-color: #ff1e9d;
    opacity: ${(props) => (props.disabled ? '0.2' : '1')};
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 15px;
`;

export { Container, Text, Form, Input, Error, Button };
