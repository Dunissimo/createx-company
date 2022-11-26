import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ICourse } from "../utils/interfaces";

interface IProps {
  course: ICourse;
  isFlex: boolean;
}

export const types = {
  Marketing: "bg-[#03CEA4]",
  "HR & Recruting": "bg-[#F89828]",
  Management: "bg-[#5A87FC]",
  Design: "bg-[#F52F6E]",
  Development: "bg-[#7772F1]",
};

const Course: FC<IProps> = ({ isFlex, course }) => {
  const { type, title, price, author, imgName, id } = course;

  const flexStyles = `flex flex-col text-center items-center gap-8 lg:flex-row lg:text-left`;
  const notFlexStyles = `flex flex-col items-center justify-start gap-8 min-w-[325px] text-center`;

  return (
    <Link to={`/courses/${id}`}>
      <div
        className={`course border border-gray-300 max-w-[65%] w-full mb-8 lg:mb-0 lg:max-w-none shadow-lg mx-auto py-4 px-4 rounded  ${
          isFlex ? flexStyles : notFlexStyles
        }`}
      >
        <div className={`img ${isFlex ? "w-2/3 lg:w-1/3" : "w-2/3"}`}>
          <img
            className="w-full h-full"
            src={process.env.PUBLIC_URL + `/images/homepage/courses/${imgName}`}
            alt={`This is ${author}`}
          />
        </div>
        <div
          className={`info ${
            isFlex ? "w-2/3" : "w-full flex flex-col items-center"
          }`}
        >
          <h4
            className={`inline px-2 py-1 text-white rounded ${
              types[type as keyof typeof types]
            }`}
          >
            {type}
          </h4>
          <h3 className="my-4">{title}</h3>
          <div className="flex items-center justify-center lg:justify-start">
            <p className="text-[#FF4242] relative mr-4 after:w-[2px] after:h-full after:block after:bg-gray-400 after:absolute after:top-0 after:right-[-0.5em]">
              ${price}
            </p>
            <p className="text-[#787A80]">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
