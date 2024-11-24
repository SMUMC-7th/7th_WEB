import { useEffect, useState } from "react";
import { CartIcon, ChevronUp, ChevronDown } from "../mocks/icons";
import { TCartItem } from "../mocks/cartItems";
import { useCartStore } from "../store/cartSlice/cartSlice";

export default function CardItem({ card }: { card: TCartItem }) {
  const { removeItem, decreaseAmount, increaseAmount, setTotalAmount } =
    useCartStore((state) => state);
  const handleUpClick = () => {
    increaseAmount(card.id);
  };
  const handleDownClick = () => {
    // 1이면 제거
    if (card.amount == 1) {
      removeItem(card.id);
      return;
    }
    // 감소
    decreaseAmount(card.id);
  };

  useEffect(() => {
    // 토탈 상태 새로 구하기
    console.log("나 해요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    setTotalAmount();
  }, [increaseAmount, decreaseAmount]);

  return (
    <div className="flex min-w-full h-[100px] mb-3">
      <div
        style={{ backgroundImage: `url(${card.img})` }}
        className=" bg-cover bg-center w-1/5 rounded"
      ></div>
      <div className="p-2 bg-cover bg-center w-3/5">
        <div>
          <span>{card.title} | </span>
          <span>{card.singer}</span>
        </div>
        <div>
          <span>₩ {card.price} </span>
        </div>
      </div>
      <div className="bg-cover bg-center w-1/5 flex flex-col justify-center items-end">
        <ChevronUp onClick={handleUpClick}></ChevronUp>
        <div className="w-[20%] flex justify-center items-center">
          {card.amount}
        </div>
        <ChevronDown onClick={handleDownClick}></ChevronDown>
      </div>
    </div>
  );
}
