import React from "react";
import { showPost } from "../store/store";
import { useDispatch } from "react-redux";

export const Card = ({
  content,
  id,
  title,
  imageUrl,
}: {
  content: string;
  title: string;
  id: number;
}) => {
  return (
    <div className="w-32 h-28 rounded-lg border border-black border-opacity-30 overflow-hidden">
      <h3 className="text-lg truncate">{title}</h3>
      <p className="text-xs">{content}</p>
    </div>
  );
};
