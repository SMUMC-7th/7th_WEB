import React from "react";
import { TCartItem } from "../mocks/cartItems";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removeItem, setTotalAmount } from "../store/cartSlice/cartSlice";
import { closeModal } from "../store/modalSlice/modalSlice";

function Modal() {
  const {
    list,
    totalAmount,
    totalPrice,
  }: { list: TCartItem[]; totalAmount?: number; totalPrice?: number } =
    useAppSelector((state) => state.cart);
  const { isModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleClickYes = () => {
    // 리스트 리셋
    list.map((card, _) => {
      dispatch(removeItem(card.id));
    });
    dispatch(setTotalAmount());

    // 모달 닫기
    dispatch(closeModal());
  };

  const handleClickNo = () => {
    // 모달 닫기
    dispatch(closeModal());
  };

  return (
    isModalOpen && (
      <>
        <div className="fixed w-[100vw] h-[100vh] bg-slate-900 z-10"></div>
        <div className="fixed top-[30vh] left-[35vw] min-w-[30%] h-[40vh] bg-green-100 flex flex-col justify-center items-center">
          <div>
            <h1>담아둔 모든 음반을 장바구니에서 제거합니다</h1>
          </div>
          <div className="flex w-[300px] justify-around">
            <button
              onClick={handleClickYes}
              className="my-4 px-4 py-2 bg-green-300 text-gray-700 rounded hover:bg-green-400"
            >
              예
            </button>
            <button
              onClick={handleClickNo}
              className="my-4 px-4 py-2 bg-red-300 text-gray-700 rounded hover:bg-red-400"
            >
              아니오
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default Modal;
