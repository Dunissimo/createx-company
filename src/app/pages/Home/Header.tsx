import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import UnFillButton from "../../components/Buttons/UnFillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Navbar from "../../components/Reuse/Navbar";
import Row from "../../components/Row";

const Header: FC = () => {
  const left = (
    <>
      <div className="showreel flex items-center justify-center lg:justify-start mb-12 ">
        <button
          onClick={() => alert("Пока что недоступно!")}
          className="bg-[#FEC8C1] px-3 py-3 rounded-[50%] flex justify-center"
        >
          <img
            src="./images/homepage/header/small.png"
            alt="play"
            className="w-[100%] bg-[#FF3F3A] rounded-[50%]"
          />
        </button>
        <p>Play showreel</p>
      </div>

      <h1 className="w-full text-center lg:text-left mb-16 text-2xl lg:text-6xl font-black">
        Enjoy studying <br /> with Createx <br /> Online Courses
      </h1>
      <div className="row flex items-center justify-center lg:justify-start">
        <Link to="/about" className="mr-8">
          <UnFillButton text="About us" />
        </Link>
        <Link to="/courses">
          <FillButton text="Explore courses" />
        </Link>
      </div>
    </>
  );

  const right = (
    <div className="img w-[85%] mx-auto mt-8 lg:mt-0">
      <img
        src="./images/homepage/header/header-illustration.png"
        className="w-full h-full"
        alt=""
      />
    </div>
  );
  return (
    <ErrorBoundary>
      <header className="bg-[#FEDDD1]">
        <Navbar />
        <Container>
          <Row left={left} right={right} />

          <div className="statistics mt-12 flex flex-col lg:flex-row items-center lg:justify-between pb-20">
            <div className="col flex items-center mb-4 lg:mb-0 ">
              <span>1200</span>
              <p>Students graduated</p>
            </div>
            <div className="col flex items-center mb-4 lg:mb-0">
              <span>84</span>
              <p>Completed courses</p>
            </div>
            <div className="col flex items-center mb-4 lg:mb-0">
              <span>16</span>
              <p>Qualified tutors</p>
            </div>
            <div className="col flex items-center mb-4 lg:mb-0">
              <span>5</span>
              <p>Years of experience</p>
            </div>
          </div>
        </Container>
      </header>
    </ErrorBoundary>
  );
};

export default Header;
