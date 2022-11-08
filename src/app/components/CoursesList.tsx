import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchCourses,
  loadCourses,
  errorCourses,
} from "../../redux/slices/coursesSlice";
import { get, BASE_URL } from "../utils/api";
import Course from "./Course";

interface IProps {
  count: number;
  gridStyles: string;
  isFlex: boolean;
}

const CoursesList: FC<IProps> = ({ count, gridStyles, isFlex }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    get(`${BASE_URL}/courses`, dispatch, {
      fetchAction: fetchCourses,
      loadAction: loadCourses,
      errorAction: errorCourses,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="container mx-auto py-20">
      <div className={`lg:grid gap-8 ${gridStyles}`}>
        {courses.map((course) => {
          if (course.id > count) return null;
          return <Course course={course} key={course.id} isFlex={isFlex} />;
        })}
      </div>
    </div>
  );
};

export default CoursesList;
