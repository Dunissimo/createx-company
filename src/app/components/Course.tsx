import React, { FC } from "react";
import { ICourse } from "../utils/interfaces";

interface IProps {
  course: ICourse;
  isFlex: boolean;
}

const Course: FC<IProps> = ({ isFlex, course }) => {
  const { type, title, price, author, imgName } = course;

  const types = {
    Marketing: "bg-[#03CEA4]",
    "HR & Recruting": "bg-[#F89828]",
    Management: "bg-[#5A87FC]",
    Design: "bg-[#F52F6E]",
    Development: "bg-[#7772F1]",
  };

  const cardClass = isFlex
    ? "text-center md:text-left lg:flex items-center"
    : "";

  return (
    <>
      <div
        className={`course-card w-[70%] lg:max-h-[500px] lg:w-full mx-auto lg:mx-0 mb-8 lg:mb-0 shadow-md rounded cursor-pointer hover:shadow-xl hover:scale-95 ${cardClass}`}
      >
        <div
          className={
            isFlex ? "h-full lg:mb-0" : "w-full h-2/4 flex justify-center"
          }
        >
          <img
            src={`./images/homepage/courses/${imgName}`}
            className={`${
              isFlex ? "h-full w-full" : "h-full w-full"
            } object-center rounded`}
            height={"100%"}
            alt=""
          />
        </div>
        <div className="info py-8 px-4">
          <h4
            className={`inline text-white rounded py-2 px-2 ${
              types[type as keyof typeof types]
            }`}
          >
            {type}
          </h4>
          <h3 className="my-6 text-xl">{title}</h3>
          <div className="row flex justify-center  items-center text-lg md:justify-start">
            <p className="text-[#FF4242] ">${price}</p>
            <p className="opacity-50 before:w-[1px] ml-4 before: before:h-full before:absolute before:top-0 before:left-[-0.5rem] relative before:bg-black">
              {author}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
