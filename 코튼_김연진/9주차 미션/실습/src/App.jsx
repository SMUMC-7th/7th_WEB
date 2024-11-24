import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import Time from './components/Time';
function App() {
    return (
        <div className="m-[30px] mt-[40px] box-border w-[600px] h-[90vh] bg-[#ffffff] pt-[40px] overflow-hidden flex flex-col justify-self-center self-center rounded-[10px]">
            <Time />
            <InputTodo />
            <TodoList />
        </div>
    );
}

export default App;
