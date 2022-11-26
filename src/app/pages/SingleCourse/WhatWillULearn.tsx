import React, { FC } from "react";
import Accordion from "../../components/Accordion";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { ILesson } from "../../utils/interfaces";

interface IProps {
  lessons: ILesson[];
}

const WhatWillULearn: FC<IProps> = ({ lessons }) => {
  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="left lg:w-1/2">
            <div className="w-full text-center lg:text-left">
              <Title
                text={{ h3: "Course program", h2: "What will you learn" }}
              />
            </div>

            <div className="lessons mt-12 w-full">
              {lessons.map((lesson, i) => (
                <Accordion lesson={lesson} key={i} />
              ))}
            </div>
          </div>
          <div className="right lg:w-1/2 flex justify-end">
            <img
              src={
                process.env.PUBLIC_URL + "/images/coursesPage/illustration.png"
              }
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWillULearn;
