import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { TTodo } from '../types/todo';

interface ITodoListContextValue {
  todoList: TTodo[];
  setTodoList: React.Dispatch<React.SetStateAction<TTodo[]>>;
}

const TodoListContext = createContext<ITodoListContextValue | null>(null);

export const TodoListProvider = ({ children }: PropsWithChildren) => {
  const [todoList, setTodoList] = useState<TTodo[]>([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export function useTodoListContext() {
  const context = useContext(TodoListContext);

  if (context == null) {
    throw new Error('TodoProvider를 찾을 수 없습니다.');
  }

  return context;
}
