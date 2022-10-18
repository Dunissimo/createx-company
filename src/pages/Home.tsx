import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import logo from "../images/homepage/header/small.png";
import illustration from "../images/homepage/header/header-illustration.png";

import whoWeAre from "../images/homepage/whoWeAre/who-we-are.png";
import UnFillButton from "../components/Buttons/unFillButton";
import SingleCourse from "../components/SingleCourse";
import { ICourse } from "../utils/interfaces";

import fakeAPI from "../utils/FakeAPI.json";

const Home: FC = () => {
  const [data, setData] = useState<ICourse[]>([]);

  const getData = (): void => {
    setData(fakeAPI.courses);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <header className="bg-[#FEDDD1] min-h-screen">
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
                    src={logo}
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
                <Link
                  to="/courses"
                  className="bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] px-12 py-3 rounded text-white hover:underline hover:opacity-85"
                >
                  Explore courses
                </Link>
              </div>
            </div>
            <div className="img w-1/2">
              <img src={illustration} className="w-full h-full" alt="" />
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
      <section className="whoWeAre py-32">
        <div className="container mx-auto">
          <div className="row flex items-start justify-between">
            <div className="left h-full w-[45%]">
              <img src={whoWeAre} alt="" />
            </div>
            <div className="right w-[45%]">
              <h3 className="uppercase">Who we are</h3>
              <h2 className="text-5xl font-black mb-10">Why Createx?</h2>
              <ul className="whoWeAre-list w-2/3">
                <li>
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                </li>
                <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                <li>
                  Consequat feugiat habitant gravida quisque elit bibendum id
                  adipiscing sed.
                </li>
                <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                <li>Tincidunt sagittis neque sem ac eget.</li>
                <li>
                  Ultricies amet justo et eget quisque purus vulputate dapibus
                  tortor.
                </li>
              </ul>
              <button className="bg-gradient-to-l from-[#FF3F3A] to-[#F75E05] text-white rounded px-8 py-3 mt-12 hover:underline">
                More about us
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="courses pb-32">
        <div className="container mx-auto">
          <h3>Ready to learn?</h3>
          <div className="row w-full flex justify-between items-center">
            <h2 className="text-5xl font-black mt-2">Featured Courses</h2>
            <Link to="/courses">
              <UnFillButton text="View All Courses" />
            </Link>
          </div>
          <div className="courses-list mt-16 grid grid-cols-2 grid-row-4 gap-8">
            {data.map((course: ICourse, key: number) => {
              if (key > 5) return null;

              return (
                <SingleCourse
                  key={key}
                  data={course}
                  imgUrl={require(`../images/homepage/courses/${course.imgName}`)}
                  isFlex={true}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
