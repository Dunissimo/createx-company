import React, { FC } from "react";
import { Link } from "react-router-dom";
import CircleButton from "../../components/Buttons/CircleButton";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import CoursesList from "../../components/Reuse/CoursesList";
import Title from "../../components/Title";

const OtherCourses: FC = () => {
  return (
    <ErrorBoundary>
      <div className="container px-4 mx-auto py-20">
        <Container>
          <div className="flex justify-between">
            <Title
              text={{ h3: "Check other courses", h2: "You may also like" }}
            />
            <div className="slider-controls items-end flex">
              <CircleButton />
              <CircleButton isRotate />
            </div>
          </div>
          <CoursesList
            count={2}
            gridStyles={"grid-cols-2 grid-rows-1"}
            isFlex={true}
          />
          <div className="flex items-center justify-center">
            <h3 className="text-2xl mr-8">Do you want more?</h3>
            <Link to="/courses">
              <FillButton text="View all courses" />
            </Link>
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default OtherCourses;
