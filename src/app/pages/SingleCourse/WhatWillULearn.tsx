import React, { FC } from "react";
import Accordion from "../../components/Accordion";
import Title from "../../components/Title";
import { ILesson } from "../../utils/interfaces";

interface IProps {
  lessons: ILesson[];
}

const WhatWillULearn: FC<IProps> = ({ lessons }) => {
  return (
    <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row items-center">
      <div className="left lg:w-1/2">
        <div className="w-full text-center lg:text-left">
          <Title text={{ h3: "Course program", h2: "What will you learn" }} />
        </div>

        <div className="lessons mt-12 w-full">
          {lessons.map((lesson, i) => (
            <Accordion lesson={lesson} key={i} />
          ))}
        </div>
      </div>
      <div className="right lg:w-1/2 flex justify-end">
        <img
          src={process.env.PUBLIC_URL + "/images/coursesPage/illustration.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhatWillULearn;
