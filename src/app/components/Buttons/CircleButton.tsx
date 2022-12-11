import React, { FC, MouseEventHandler } from "react";

interface IProps {
  isRotate?: boolean;
  clickHandler: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const CircleButton: FC<IProps> = ({ isRotate, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className={`circle-btn ${
        isRotate ? "right" : "left"
      } px-4 py-4 rounded-[50%] hover:bg-[#FF3F3A]`}
    >
      <svg
        className={`${isRotate ? "rotate-180" : ""} transition-none`}
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071L0.292892 6.70711C-0.0976315 6.31658 -0.0976315 5.68342 0.292892 5.29289L4.79289 0.792893C5.18342 0.402369 5.81658 0.402369 6.20711 0.792893C6.59763 1.18342 6.59763 1.81658 6.20711 2.20711L3.41421 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7L3.41421 7L6.20711 9.79289C6.59763 10.1834 6.59763 10.8166 6.20711 11.2071Z"
          fill="#424551"
        />
      </svg>
    </button>
  );
};

export default CircleButton;
