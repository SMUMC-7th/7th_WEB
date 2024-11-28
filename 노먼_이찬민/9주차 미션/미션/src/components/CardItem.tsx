import { useEffect, useState } from "react";
import { CartIcon, ChevronUp, ChevronDown } from "../mocks/icons";
import { TCartItem } from "../mocks/cartItems";
// import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
  setTotalAmount,
} from "../store/cartSlice/cartSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function CardItem({ card }: { card: TCartItem }) {
  const dispatch = useAppDispatch();
  const handleUpClick = () => {
    dispatch(increaseAmount(card.id));
  };
  const handleDownClick = () => {
    if (card.amount == 1) {
      dispatch(removeItem(card.id));
      return;
    }
    dispatch(decreaseAmount(card.id));
  };

  useEffect(() => {
    dispatch(setTotalAmount());
  }, [handleUpClick, handleDownClick]);

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
