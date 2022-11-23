import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCourses } from "../utils/api";
import Course from "./Course";

interface IProps {
  count?: number;
  gridStyles: string;
  isFlex: boolean;
}

const CoursesList: FC<IProps> = ({ count, gridStyles, isFlex }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCourses(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { courses, loading, error } = useAppSelector((state) => state.courses);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <div className="container mx-auto py-20">
      <div className={`lg:grid gap-8 ${gridStyles}`}>
        {courses.map((course) => {
          if (count) {
            if (course.id > count) return null;
          }

          return <Course course={course} key={course.id} isFlex={isFlex} />;
        })}
      </div>
    </div>
  );
};

export default CoursesList;
