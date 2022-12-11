import React, { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";
import { ICourse } from "../utils/interfaces";

interface IProps {
  style?: CSSProperties;
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

const Course: FC<IProps> = ({ isFlex, course, style }) => {
  const { type, title, price, author, imgName, id } = course;

  const flex = {
    mainDiv:
      "flex flex-col lg:flex-row lg:items-center lg:h-[210px] mb-8 lg:mb-0",
    imgDiv: {
      div: "lg:w-[50%] h-full flex flex-col",
      img: "h-full",
    },
    infoDiv: {
      div: "lg:w-[50%] mx-4 py-4 lg:py-8",
    },
  };
  const card = {
    mainDiv: "h-[445px] mb-8 lg:mb-0",
    imgDiv: {
      img: "w-full mb-8",
    },
    infoDiv: {
      div: "px-8 pb-8",
    },
  };

  return (
    <Link to={`/courses/${id}`}>
      <div
        style={style}
        className={`${
          isFlex ? flex.mainDiv : card.mainDiv
        } bg-white border border-gray-300 rounded shadow-lg hover:shadow-xl hover:scale-[1.01]`}
      >
        <div className={isFlex ? flex.imgDiv.div : ""}>
          <img
            className={isFlex ? flex.imgDiv.img : card.imgDiv.img}
            src={process.env.PUBLIC_URL + `/images/homepage/courses/${imgName}`}
            alt={`This is ${author}`}
          />
        </div>

        <div className={isFlex ? flex.infoDiv.div : card.infoDiv.div}>
          <h4
            className={`${
              types[type as keyof typeof types]
            } inline text-white px-2 py-1 rounded`}
          >
            {type}
          </h4>
          <h3 className="my-4 text-xl">{title}</h3>
          <div className="flex">
            <p className="text-[#FF3F3A]">${price}</p>
            <p className="opacity-50 ml-4 relative before:absolute before:left-[-10px] before:h-full before:w-[2px] before:bg-black before:block">
              {author}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
