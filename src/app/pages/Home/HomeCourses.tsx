import React, { FC } from "react";
import { Link } from "react-router-dom";
import UnFillButton from "../../components/Buttons/UnFillButton";
import Title from "../../components/Title";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import CoursesList from "../../components/Reuse/CoursesList";

const HomeCourses: FC = () => {
  return (
    <ErrorBoundary>
      <section className="pb-32">
        <Container>
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
          <CoursesList count={6} gridStyles="grid-rows-3 grid-cols-2" isFlex />
        </Container>
      </section>
    </ErrorBoundary>
  );
};

export default HomeCourses;
