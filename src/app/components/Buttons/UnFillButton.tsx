import React, { FC } from "react";

interface IProps {
  text: string;
}

const UnFillButton: FC<IProps> = ({ text }) => {
  const baseStyle =
    "block relative px-4 py-1 lg:px-8 lg:py-3 text-[#FF3F3A] rounded bg-none border border-[#FF3F3A] z-20 hover:text-white";
  const afterStyles = `
    after:w-0 after:h-full after:bg-[#ff3f3a] after:absolute after:top-0 after:left-0 after:z-[-1] after:block after:transition-all after:duration-1000
    hover:after:w-full
  `;
  return (
    <>
      <button className={`${baseStyle} ${afterStyles}`}>{text}</button>
    </>
  );
};

export default UnFillButton;
