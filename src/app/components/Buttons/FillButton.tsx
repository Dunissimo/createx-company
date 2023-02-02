import React, { FC, MouseEventHandler } from "react";

interface IProps {
  text: string;
  onClick?: MouseEventHandler;
}

const FillButton: FC<IProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] px-4 py-1 lg:px-12 lg:py-3 rounded text-white hover:drop-shadow-xl hover:scale-95 shadow-black active:scale-95"
    >
      {text}
    </button>
  );
};

export default FillButton;
