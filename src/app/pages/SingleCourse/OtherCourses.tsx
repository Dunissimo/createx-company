import React, { FC, useEffect } from "react";
import Course from "../../components/Course";
import OtherItem from "../../components/OtherItem";
import { getCourses } from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const OtherCourses: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCourses(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { courses } = useAppSelector((state) => state.courses);

  return (
    <OtherItem
      data={{
        h3: "Check other courses",
        h2: "You may also like",
        linkTo: "/courses",
        bottom: "Do you want more courses?",
        bottomInBtn: "View all courses",
        slidesToShow: 2,
      }}
      slides={courses.map((course) => {
        return <Course course={course} isFlex={true} />;
      })}
    />
  );
};

export default OtherCourses;
