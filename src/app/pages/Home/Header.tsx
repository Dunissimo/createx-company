import React, { FC } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import UnFillButton from "../../components/Buttons/unFillButton";
import Navbar from "../../components/Navbar";

const Header: FC = () => {
  return (
    <header className="bg-[#FEDDD1]">
      <Navbar />
      <div className="container mx-auto">
        <div className="body py-32 flex items-center">
          <div className="text w-1/2">
            <div className="showreel flex items-center mb-12">
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

            <h1 className="mb-16 text-6xl font-black">
              Enjoy studying <br /> with Createx <br /> Online Courses
            </h1>
            <div className="row flex items-center">
              <Link to="/about" className="mr-8">
                <UnFillButton text="About us" />
              </Link>
              <Link to="/courses">
                <FillButton text="Explore courses" />
              </Link>
            </div>
          </div>
          <div className="img w-1/2">
            <img
              src="./images/homepage/header/header-illustration.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="statistics flex justify-between pb-20">
          <div className="col flex items-center">
            <h2>1200</h2>
            <p>Students graduated</p>
          </div>
          <div className="col flex items-center">
            <h2>84</h2>
            <p>Completed courses</p>
          </div>
          <div className="col flex items-center">
            <h2>16</h2>
            <p>Qualified tutors</p>
          </div>
          <div className="col flex items-center">
            <h2>5</h2>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
