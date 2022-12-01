import React, { FC, useState } from "react";
import { ILesson, ITheme } from "../utils/interfaces";

interface IProps {
  item: ILesson | ITheme;
}

const Accordion: FC<IProps> = ({ item }) => {
  const [isOpen, setOpenStatus] = useState(false);
  const { numberOfItem, head, text } = item;

  return (
    <div
      onClick={() => setOpenStatus((prev) => !prev)}
      className={`lesson w-full cursor-pointer ${
        isOpen ? "open" : ""
      } flex items-start mb-6`}
    >
      <button className="text-[#FF3F3A] text-lg lg:text-2xl">
        {isOpen ? <p>&mdash;</p> : "+"}
      </button>
      <div className="pl-2 lg:pl-8">
        <div className="top flex lg:items-center">
          <h3 className="text-[#FF3F3A] whitespace-nowrap text-md lg:text-xl">
            {numberOfItem}.
          </h3>
          <h2 className="pl-2 text-md lg:text-xl">{head}</h2>
        </div>
        <div className="text hidden h-0 mt-4 text-gray-700">{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
