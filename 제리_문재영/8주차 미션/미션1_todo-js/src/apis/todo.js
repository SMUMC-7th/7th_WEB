import axiosInstance from "./axiosInstance";

const createTodo = async({title, content, checked = false}) => {
    const {data} = await axiosInstance.post("/todo", {
        title,
        content,
        checked,
    });

    return data;
}

const readTodo = async({title}) => {
    let url = '/todo';

    if(title){
        url += `?title=${title}`;
    }
    const {data} = await axiosInstance.get(url);

    return data;
};

const readTodoList = async({id}) => {
    const {data} = await axiosInstance.get(`/todo/${id}`);

    return data;
};

const updateTodo = async({id, title, content, checked}) => {
    const {data} = await axiosInstance.patch(`/todo/${id}`, {
        title,
        content,
        checked,
    });

    return data;
}

const deleteTodo = async({id}) => {
    const {data} = await axiosInstance.delete(`/todo/${id}`);

    return data;
};

export {createTodo, readTodo, readTodoList, updateTodo, deleteTodo};