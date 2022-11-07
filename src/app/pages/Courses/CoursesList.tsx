import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  fetchCourses,
  loadCourses,
  errorCourses,
} from "../../../redux/slices/coursesSlice";
import { get, BASE_URL } from "../../utils/api";
import Course from "./Course";

const CoursesList: FC = () => {
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
    <section>
      <div
        className="courses-list mt-16 md:grid gap-8"
        style={{
          gridTemplateColumns: `repeat(2, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(auto, minmax(0, 1fr))",
        }}
      >
        {courses.map((course) => {
          if (course.id > 6) return null;
          return <Course course={course} key={course.id} isFlex />;
        })}
      </div>
    </section>
  );
};

export default CoursesList;
