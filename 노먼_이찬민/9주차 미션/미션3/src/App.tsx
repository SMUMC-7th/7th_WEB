import { useEffect, useState } from "react";
import { CartIcon, ChevronUp, ChevronDown } from "./mocks/icons";
import { TCartItem } from "./mocks/cartItems";
// import { useDispatch, useSelector } from "react-redux";
import { useCartStore } from "./store/cartSlice/cartSlice";
import CardItem from "./components/CardItem";
import Modal from "./components/Modal";
import { useModalStore } from "./store/modalSlice/modalSlice";

function App() {
  const { list, totalAmount, totalPrice, setTotalAmount } = useCartStore(
    (state) => state
  );
  const { isModalOpen, setIsModalOpen } = useModalStore((state) => state);

  console.log(list, totalAmount, totalPrice);

  const handleClickResetBtn = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setTotalAmount();
  }, [list]);

  return (
    // container
    <div className="min-w-full">
      {/* header */}
      <div className=" bg-blue-400 flex justify-between h-[10vh] items-center">
        <div className="w-2/4 flex justify-center items-center">
          <span className="text-3xl text-white font-semibold">
            UMC PlayList
          </span>
        </div>
        <div className="w-1/4">
          <div className="relative top-[1.5vh]">
            <CartIcon></CartIcon>
          </div>
          <div className="relative top-[-5vh] left-7 w-6 h-6 bg-red-400 flex justify-center items-center rounded-full text-white">
            {totalAmount}
          </div>
        </div>
      </div>
      {/* 메인박스 */}
      <div className="min-w-full flex flex-col items-center">
        <div className="h-[20vh] flex justify-center items-center text-4xl relative top-4 font-semibold">
          <h1>당신이 선택한 음반</h1>
        </div>
        <div className="max-w-[70%] my-0 mx-auto">
          <div className="border-b-4 border-gray-400 pb-4 flex flex-col justify-center items-center">
            {list.map((card) => (
              <CardItem key={card.id} card={card}></CardItem>
            ))}
          </div>
          <div className="mt-5 flex justify-around text-[25px]">
            <div>총 가격</div>
            <div>₩ {totalPrice}</div>
          </div>
        </div>
        <button
          onClick={handleClickResetBtn}
          className="my-4 px-4 py-2 bg-red-300 text-gray-700 rounded hover:bg-red-400 "
        >
          장바구니 초기화
        </button>
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
}

export default App;
