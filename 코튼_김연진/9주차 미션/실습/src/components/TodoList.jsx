import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FaCheck } from 'react-icons/fa6';

export default function TodoList() {
    const todolist = useSelector((state) => state.todo); // Redux 상태를 조회
    const dispatch = useDispatch(); // Redux 액션을 디스패치, dispatch: Redux 액션을 실행하기 위한 함수

    console.log(todolist);
    const trash = <FontAwesomeIcon icon={faTrashCan} />;

    const todolistView = todolist.map((todo, idx) => (
        <li
            className="w-[90%] p-[10px] mt-[20px] flex justify-center relative self-center"
            key={todolist[idx].id}
        >
            <input
                className="break-words w-[40px] h-[40px] rounded-[50%] border-[1px] border-solid border-[#999] appearance-none transition-bg checked:bg-[#50bcdf] checked:border-none "
                type="checkbox"
                onChange={() => dispatch(complete(todolist[idx].id))}
                checked={todo.complete}
            />
            {todo.complete ? (
                <FaCheck className="text-[white] absolute z-1 left-[20px] top-[20px] w-[20px] h-[20px]"></FaCheck>
            ) : (
                <></>
            )}
            <div className="ml-[40px] w-[200px] text-[25px] ">
                {todo.complete === false ? (
                    <>{todo.text}</>
                ) : (
                    <del>{todo.text}</del>
                )}
            </div>
            <button
                className="ml-auto w-[50px] h-[40px] text-[25px] border-none text-[#999] bg-[#fff] hover:text-[#50bcdf] cursor-pointer "
                type="button"
                onClick={() => dispatch(remove(todolist[idx].id))}
            >
                {trash}
            </button>
        </li>
    ));

    return (
        <div className="flex w-full h-full mt-[20px]">
            <ul className="w-full h-[310px] overflow-y-auto flex flex-col">
                {todolistView}
            </ul>
        </div>
    );
}
