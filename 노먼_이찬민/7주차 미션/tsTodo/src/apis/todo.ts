import { TTodo } from "../types/todo";

export const getTodolist = async (): Promise<TTodo[]> => {
  return new Promise<TTodo[]>((resolve): void => {
    setTimeout(() => {
      return resolve([
        { id: 1, text: "123 test", checked: true },
        { id: 2, text: "1234 test", checked: false },
      ]);
    }, 1_000);
  });
};
