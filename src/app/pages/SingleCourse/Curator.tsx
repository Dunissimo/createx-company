import React, { FC } from "react";
import Human from "../../components/SingleItem/Human";
import { ICurator } from "../../utils/interfaces";

interface IProps {
  curator: ICurator;
}

const Curator: FC<IProps> = ({ curator }) => {
  const { name, job, studentsCount, coursesCount, text, rating } = curator;

  return (
    <Human
      human={{
        image: "/images/coursesPage/image.png",
        who: "Course Curator",
        name,
        job,
      }}
      about={text}
    >
      <div className="achievements">
        <p className="before:content-[url(/public/images/coursesPage/star.svg)] before:pr-2">
          {rating} rate
        </p>
        <p className="my-2 before:content-[url(/public/images/coursesPage/play.svg)] before:pr-2">
          {coursesCount} courses
        </p>
        <p className="before:content-[url(/public/images/coursesPage/people.svg)] before:pr-2">
          {studentsCount} students
        </p>
      </div>
    </Human>
  );
};

export default Curator;
