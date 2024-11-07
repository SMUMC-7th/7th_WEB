import Button from './components/button';
import Input from './components/input';
import './App.css';
import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';

function App() {
    const {
        todos,
        text,
        setText,
        editingId,
        setEditingId,
        editText,
        setEditText,
        handleSubmit,
        deleteTodo,
        updateTodo,
    } = useContext(TodoContext);
    return (
        <div className="container">
            <h1>React TodoList</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="할 일을 입력하세요"
                    className="todoAddInput"
                />
                <Button
                    type="submit"
                    className="submitBtn"
                    text={'할 일 등록'}
                ></Button>
            </form>
            <div className="todolists">
                {todos.map((todo) => (
                    <div className="todolists--item" key={todo.id}>
                        {/* 수정이 아닐 때 */}
                        {editingId !== todo.id && (
                            <>
                                <div className="todolists--item__info">
                                    <p>{todo.id}. </p>
                                    <p> {todo.task}</p>
                                </div>
                                <div className="todolists--item__buttons">
                                    <Button
                                        text={'수정하기'}
                                        onClick={() => {
                                            setEditText(editText || todo.task);
                                            setEditingId(todo.id);
                                        }}
                                        className="editStart"
                                    ></Button>
                                    <Button
                                        text={'삭제하기'}
                                        onClick={() => deleteTodo(todo.id)}
                                        className="deleteBtn"
                                    ></Button>
                                </div>
                            </>
                        )}
                        {/* 수정 중 상태일 때 */}
                        {editingId === todo.id && (
                            <>
                                <div className="todolists--item__info">
                                    <p>{todo.id}.</p>
                                    <Input
                                        defaultValue={todo.task}
                                        onChange={(e) =>
                                            setEditText(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="todolists--item__buttons">
                                    <Button
                                        text={'수정 완료'}
                                        onClick={() =>
                                            updateTodo(editingId, editText)
                                        }
                                        className="editComplete"
                                    ></Button>
                                    <Button
                                        text={'삭제하기'}
                                        onClick={() => deleteTodo(todo.id)}
                                        className="deleteBtn"
                                    ></Button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
