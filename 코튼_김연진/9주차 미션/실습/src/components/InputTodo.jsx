import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';
import { IoMdAdd } from 'react-icons/io';

export default function InputTodo() {
    const dispatch = useDispatch();

    const [todolist, setTodolist] = useState({
        id: 0,
        text: '',
    });

    function handleText(e) {
        setTodolist({ text: e.target.value });
    }

    function onReset() {
        setTodolist({ text: '' });
    }

    return (
        <div className="mt-[30px] pr-[40px] pl-[40px] w-full h-auto">
            <form
                className="w-[600px] h-[50px] p-auto"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (todolist.text !== '') {
                        dispatch(add(todolist.text));
                    } else alert('할 일을 입력해주세요!');
                    onReset();
                }}
            >
                <div className="flex">
                    <input
                        placeholder="할일을 입력해주세요"
                        className="w-[440px] h-[50px] border-[2px] border-solid border-[gray] rounded-[20px] p-[20px] text-[25px] font-semibold text-[#7e7e7e] bg-[#fff]"
                        type="text"
                        value={todolist.text}
                        onChange={handleText}
                    />
                    <div
                        className="justify-center items-center flex cursor-pointer"
                        onClick={() => {
                            document.querySelector('form').requestSubmit();
                        }}
                    >
                        <IoMdAdd className="w-[30px] h-[30px] ml-[30px] justify-center items-center" />
                    </div>
                </div>
            </form>
        </div>
    );
}
