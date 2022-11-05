import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

// import { getData } from "../../utils/api";

import Course from "./Course";

interface IProps {
  count: number;
  isFlex: boolean;
}

const CoursesList: FC<IProps> = ({ count, isFlex }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // getData(dispatch);
  }, []);

  const data = useAppSelector((state) => state.courses);
  const { courses, loading, error } = data;

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error!</h2>;
  }

  return (
    <section>
      <div
        className="courses-list mt-16 md:grid gap-8"
        style={{
          gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(auto, minmax(0, 1fr))",
        }}
      >
        {courses.map((course, id) => {
          if (id >= count) return;
          return <Course course={course} isFlex={isFlex} key={course.id} />;
        })}
      </div>
    </section>
  );
};

export default CoursesList;
