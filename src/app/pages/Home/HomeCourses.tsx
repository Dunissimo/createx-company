import React, { FC } from "react";
import { Link } from "react-router-dom";
import UnFillButton from "../../components/Buttons/unFillButton";
import Title from "../../components/Title";
import CoursesList from "../Courses/CoursesList";

const HomeCourses: FC = () => {
  return (
    <section className="courses pb-32">
      <div className="container mx-auto">
        <div className="row w-full flex justify-between items-center">
          <Title
            text={{
              h3: "Ready to learn?",
              h2: "Featured Courses",
            }}
          />
          <Link to="/courses">
            <UnFillButton text="View All Courses" />
          </Link>
        </div>
        <CoursesList count={6} isFlex />
      </div>
    </section>
  );
};

export default HomeCourses;
