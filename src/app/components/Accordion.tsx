import React, { FC, useState } from "react";
import { ILesson } from "../utils/interfaces";

interface IProps {
  lesson: ILesson;
}

const Accordion: FC<IProps> = ({ lesson }) => {
  const [isOpen, setOpenStatus] = useState(false);
  const { numberOfLesson, head, text } = lesson;
  return (
    <div
      onClick={() => setOpenStatus((prev) => !prev)}
      className={`lesson cursor-pointer ${
        isOpen ? "open" : ""
      } flex items-start mb-6`}
    >
      <button className="text-[#FF3F3A] text-2xl">
        {/* {isOpen ? (
          <img
            src={
              process.env.PUBLIC_URL + "/images/coursesPage/minus-controls.svg"
            }
            alt=""
          />
        ) : (
          <img
            src={
              process.env.PUBLIC_URL + "/images/coursesPage/plus-controls.svg"
            }
            alt=""
          />
        )} */}
        {isOpen ? <p>&mdash;</p> : "+"}
      </button>
      <div className="pl-8">
        <div className="top flex items-center">
          <h3 className="text-[#FF3F3A] text-xl">Lesson {numberOfLesson}.</h3>
          <h2 className="pl-2 text-xl">{head}</h2>
        </div>
        <div className="text hidden h-0 mt-4 text-gray-700">{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
