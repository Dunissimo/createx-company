import React, { FC } from "react";
import { Link } from "react-router-dom";
import UnFillButton from "../../components/Buttons/unFillButton";
import CoursesList from "../Courses/CoursesList";

const HomeCourses: FC = () => {
  return (
    <section className="courses pb-32">
      <div className="container mx-auto">
        <h3>Ready to learn?</h3>
        <div className="row w-full flex justify-between items-center">
          <h2 className="text-5xl font-black mt-2">Featured Courses</h2>
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
