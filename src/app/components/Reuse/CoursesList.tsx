import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getCourses } from "../../utils/api";
import Container from "../Container";
import Course from "../Course";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";

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

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <div className="py-20">
      <Container>
        <div className={`lg:grid gap-8 ${gridStyles}`}>
          {courses.map((course) => {
            if (count) {
              if (course.id > count) return null;
            }

            return <Course course={course} key={course.id} isFlex={isFlex} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default CoursesList;
