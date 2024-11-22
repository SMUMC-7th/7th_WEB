import axios from 'axios';
import { TTodo } from '../type/todo';

export const getTodoList = async (): Promise<TTodo[]> => {
    const response = await axios.get('http://localhost:3000/todo');
    const data = response.data[0];
    return data;
};

export const addTodo = async (data: TTodo) => {
    const response = await axios.post('http://localhost:3000/todo', data);
    return response;
};

export const deleteTodo = async (id: number) => {
    const response = await axios.delete(`http://localhost:3000/todo/${id}`);
    return response;
};

export const updateTodo = async (data: Partial<TTodo>, id: number) => {
    const response = await axios.patch(
        `http://localhost:3000/todo/${id}`,
        data
    );
    return response;
};

export const getOneTodo = async (id: number): Promise<TTodo> => {
    const response = await axios.get(`http://localhost:3000/todo/${id}`);
    return response.data;
};
