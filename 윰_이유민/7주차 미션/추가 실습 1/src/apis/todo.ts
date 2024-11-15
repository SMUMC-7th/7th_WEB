import { TTodo } from '../types/todo';

// TodoList 불러오는 가상의 API (1초 지연)
export const getTodoList = async () => {
  return new Promise<TTodo[]>((resolve) => {
    setTimeout(() => {
      return resolve([
        { id: 1, text: '연진이는 서버로 도망갈려한다.', checked: true },
        { id: 1, text: '찬민이는 강의를 안 듣는다.', checked: false },
      ]);
    }, 1_000);
  });
};
