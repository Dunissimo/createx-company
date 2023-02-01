import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { getCourses } from "../../utils/api";
import Container from "../Container";
import Course from "../Course";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import { useSearchParams } from "react-router-dom";
import { ICourse } from "../../utils/interfaces";

interface IProps {
  count?: number;
  gridStyles: string;
  isFlex: boolean;
}

const CoursesList: FC<IProps> = ({ count, gridStyles, isFlex }) => {
  const [params] = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCourses(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { courses, loading, error } = useAppSelector((state) => state.courses);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  const theme = params.get("theme");
  const query = params.get("query");

  const filterByTheme = (course: ICourse) => {
    if (theme && theme.toLowerCase() !== "all") {
      return course.type.toLowerCase() === theme;
    }
    return true;
  };

  const filterByTitle = (course: ICourse) => {
    if (query) {
      return course.title.toLowerCase().includes(query.toLowerCase());
    }
    return true;
  };

  return (
    <Container>
      <div className={`lg:grid gap-8 ${gridStyles}`}>
        {courses
          .filter(filterByTheme)
          .filter(filterByTitle)
          .map((course) => {
            if (count) {
              if (course.id > count) return null;
            }

            return <Course course={course} key={course.id} isFlex={isFlex} />;
          })}
      </div>
    </Container>
  );
};

export default CoursesList;
