import React, { FC } from "react";
import { ICourse } from "../../utils/interfaces";

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

  const cardClass = isFlex ? "flex items-start" : "";
  const infoClass = `info ${isFlex ? "py-8 ml-10" : ""}`;

  return (
    <>
      <div
        className={`course-card shadow-md rounded cursor-pointer hover:shadow-xl ${cardClass}`}
      >
        <img
          src={`./images/homepage/courses/${imgName}`}
          className="h-full object-center object-cover"
          width="40%"
          alt=""
        />
        <div className={infoClass}>
          <h4
            className={`inline text-white rounded py-2 px-2 ${
              types[type as keyof typeof types]
            }`}
          >
            {type}
          </h4>
          <h3 className="my-6 text-xl">{title}</h3>
          <div className="row flex items-center text-lg">
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
