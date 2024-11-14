import { TTodo } from "../types/todo";

//TOdoList를 불러오는 가상의 API 를 만들어보자! (1초 정도 지연시간)
export const getTodoList = async () => {
  return new Promise<TTodo[]>((resolve) => {
    setTimeout(() => {
      return resolve([
        { id: 1, text: "web은 짱이다!", checked: true },
        { id: 2, text: "web은 짱짱이다!", checked: false },
      ]);
    }, 1_000);
  });
};
