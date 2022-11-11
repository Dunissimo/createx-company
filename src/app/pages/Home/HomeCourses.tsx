import React, { FC } from "react";
import { Link } from "react-router-dom";
import UnFillButton from "../../components/Buttons/unFillButton";
import Title from "../../components/Title";
import CoursesList from "../../components/CoursesList";

const HomeCourses: FC = () => {
  return (
    <section className="courses pb-32">
      <div className="container mx-auto">
        <div className="row w-full lg:flex mx-4 lg:mx-0 justify-between items-center">
          <div className="mb-4 lg:mb-0">
            <Title
              text={{
                h3: "Ready to learn?",
                h2: "Featured Courses",
              }}
            />
          </div>
          <Link to="/courses" className="mt-8">
            <UnFillButton text="View All Courses" />
          </Link>
        </div>
        <CoursesList count={2} gridStyles="grid-rows-3 grid-cols-2" isFlex />
      </div>
    </section>
  );
};

export default HomeCourses;
