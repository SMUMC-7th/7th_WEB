import { create } from "zustand";
import cartItems, { TCartItem } from "../../mocks/cartItems";
// store의 타입을 정의해준다.
type TCartStore = {
  list: TCartItem[];
  totalAmount: number;
  totalPrice: number;
  increaseAmount: (id: string) => void;
  decreaseAmount: (id: string) => void;
  removeItem: (id: string) => void;
  setTotalAmount: () => void;
};

// 왠지는 모르겠는데 일단 set함수를 가지고 화살표 함수를 정의할 때 => ({name:val}) 형태로 만듦...?
// => 객체 상수와의 문법 혼동을 피하기 위해서 객체 상수를 정의 후 반환 해야할때 ()로 감싼다고 함

// set 함수 문법은 set((state)=>({name: 넣을값}))으로 사용함

export const useCartStore = create<TCartStore>((set) => ({
  // 초깃값
  list: cartItems,
  totalAmount: cartItems.reduce((acc, item) => acc + item.amount, 0),
  totalPrice: cartItems.reduce((acc, item) => acc + Number(item.price), 0),
  increaseAmount: (id) => {
    set((state) => ({
      list: state.list.map((item) => {
        return item.id === id ? { ...item, amount: item.amount + 1 } : item;
      }),
    }));
  },
  decreaseAmount: (id) => {
    set((state) => ({
      list: state.list.map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      }),
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      list: state.list.filter((item) => {
        return item.id !== id;
      }),
    }));
  },
  setTotalAmount: () => {
    set((state) => ({
      totalAmount: state.list.reduce((acc, item) => acc + item.amount, 0),
      totalPrice: state.list.reduce(
        (acc, item) => acc + Number(item.price) * item.amount,
        0
      ),
    }));
  },
}));
