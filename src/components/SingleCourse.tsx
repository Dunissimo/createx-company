import React, { FC } from "react";
import { ICourse } from "../utils/interfaces";

interface IProps {
  data: ICourse;
  imgUrl: string;
  isFlex: boolean;
}

const SingleCourse: FC<IProps> = ({ data, isFlex, imgUrl }) => {
  const { type, title, price, author } = data;

  const classes = {
    card: "",
    info: "",
    type: {
      Marketing: "bg-[#03CEA4]",
      "HR & Recruting": "bg-[#F89828]",
      Management: "bg-[#5A87FC]",
      Design: "bg-[#F52F6E]",
      Development: "bg-[#7772F1]",
    },
  };

  if (isFlex) {
    classes.card = `flex items-start`;
    classes.info = `py-8 ml-10`;
  }

  return (
    <div
      className={`course-card shadow-md rounded cursor-pointer ${classes.card} hover:shadow-xl`}
    >
      <img src={imgUrl} className="h-full" alt="" />
      <div className={`info ${classes.info}`}>
        <h4
          className={`inline text-white rounded py-2 px-2 ${
            classes.type[type as keyof typeof classes.type]
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
  );
};

export default SingleCourse;
