import React, { FC, useEffect, useState } from "react";
import { ICourse } from "../../utils/interfaces";

import Course from "./Course";

interface IProps {
  count: number;
  isFlex: boolean;
}

const CoursesList: FC<IProps> = ({ count, isFlex }) => {
  const [data, setData] = useState<ICourse[]>([]);

  const getData = () => {
    fetch(`https://api.npoint.io/66466e607109c64c28f2/courses`)
      .then((res) => res.json())
      .then((data) => {
        data.length = count;
        setData(data);
      })
      .catch((reason) => console.log(reason));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <div
        className="courses-list mt-16 md:grid gap-8"
        style={{
          gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(auto, minmax(0, 1fr))",
        }}
      >
        {data.map((course) => (
          <Course course={course} isFlex={isFlex} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default CoursesList;
