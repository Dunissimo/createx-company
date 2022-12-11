import React, { FC } from "react";
import Accordion from "../../components/Accordion";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Title from "../../components/Title";
import { ILesson } from "../../utils/interfaces";

interface IProps {
  lessons: ILesson[];
}

const WhatWillULearn: FC<IProps> = ({ lessons }) => {
  const left = (
    <>
      <div className="w-full text-center lg:text-left">
        <Title text={{ h3: "Course program", h2: "What will you learn" }} />
      </div>

      <div className="lessons mt-12 w-full">
        {lessons.map((lesson, i) => (
          <Accordion item={lesson} key={i} />
        ))}
      </div>
    </>
  );

  const right = (
    <div className="flex justify-end">
      <img
        loading="lazy"
        src={process.env.PUBLIC_URL + "/images/coursesPage/illustration.png"}
        alt=""
      />
    </div>
  );

  return (
    <div className="py-20">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default WhatWillULearn;
