import {
  createContext,
  PropsWithChildren,
  useState,
  ChangeEvent,
  useEffect,
  useContext,
} from "react";
import { TTodo } from "../types/todo";
import { getTodoList } from "../apis/todo";

interface ITodoContext {
  todoList: TTodo[];
  setTodoList: React.Dispatch<React.SetStateAction<TTodo[]>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onToggleTodo: (id: number) => void;
  handelAddTodo: () => void;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoContext = createContext<ITodoContext | null>(null);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  //   const onAddTodo = (text: string) => {
  //     setTodos((prev) => [
  //       ...prev,
  //       {
  //         id: prev.length + 1,
  //         text: text,
  //         checked: false,
  //       },
  //     ]);
  //   };

  const handelAddTodo = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: text,
        checked: false,
      },
    ]);
    setText("");
  };

  const onToggleTodo = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChangeTodo = (id: number) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
    setText("");
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const fetchTodo = async () => {
      const result = await getTodoList();
      setTodoList(result);
    };
    fetchTodo();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        text,
        setText,
        todoList,
        setTodoList,
        onToggleTodo,
        handelAddTodo,
        handleChangeText,
        handleChangeTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export function useTodoContext() {
  const todos = useContext(TodoContext);
  if (todos === null) {
    throw new Error("TodoProvider를 찾을 수 없습니다.");
  }
  return todos;
}
