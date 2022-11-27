import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import UnFillButton from "../../components/Buttons/unFillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Row from "../../components/Row";
import Title from "../../components/Title";

const OnlineSchool: FC = () => {
  const left = (
    <div className="flex flex-col justify-between">
      <Title text={{ h3: "About us", h2: "Createx Online School" }} />
      <h3 className="text-xl mt-20">
        Createx Online School is a leader in online studying. We have lots of
        courses and programs from the main market experts.
      </h3>
      <p className="opacity-50 mt-6 mb-14">
        We provide relevant approaches to online learning, internships and
        employment in the largest companies in the country. Our educational
        programs help you get a new specialty from scratch. During your studies,
        we will help you find a job. Check the courses and online events that we
        organise.
      </p>
      <div className="flex itemsc-center gap-8">
        <Link to="/events">
          <UnFillButton text="Explore events" />
        </Link>
        <Link to="/courses">
          <FillButton text="Browse courses" />
        </Link>
      </div>
    </div>
  );

  const right = (
    <div className="ml-12 text-right flex justify-end">
      <img
        className="w-full"
        src="./images/aboutPage/illustration.png"
        alt=""
      />
    </div>
  );

  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <Row left={left} right={right} />
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default OnlineSchool;
