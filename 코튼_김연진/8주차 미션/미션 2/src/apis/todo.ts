import { TTodo } from '../type/todo';
import axiosInstance from './axios-instance';

export const addTodo = async ({
    title,
    content,
    checked = false,
}: {
    title: string;
    content: string;
    checked: boolean;
}) => {
    const response = await axiosInstance.post('/todo', {
        title,
        content,
        checked,
    });
    return response;
};

export const deleteTodo = async (id: number) => {
    const response = await axiosInstance.delete(`/todo/${id}`);
    return response;
};

export const updateTodo = async ({
    id,
    title,
    content,
    checked,
}: {
    id: number;
    title: string;
    content: string;
    checked: boolean;
}) => {
    const response = await axiosInstance.patch(`/todo/${id}`, {
        title,
        content,
        checked,
    });
    return response;
};

export const getOneTodo = async (id: number): Promise<TTodo> => {
    const response = await axiosInstance.get(`/todo/${id}`);
    return response.data;
};

export const searchTodoList = async ({
    title,
}: {
    title: string;
}): Promise<TTodo[]> => {
    let url = '/todo';
    if (title) {
        url += `?title=${title}`;
    }
    const response = await axiosInstance.get(url);
    const data = response.data[0];
    return data;
};

export const getTodoList = async (): Promise<TTodo[]> => {
    const response = await axiosInstance.get('/todo');
    const data = response.data[0];
    return data;
};
