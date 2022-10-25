import React, { FC } from "react";

interface IProps {
  text: string;
}

const FillButton: FC<IProps> = ({ text }) => {
  return (
    <button className="bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] mr-[2.25rem] px-12 py-3 rounded text-white hover:drop-shadow-xl shadow-black active:scale-95">
      {text}
    </button>
  );
};

export default FillButton;
