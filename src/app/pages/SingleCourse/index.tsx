import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Testimonials from "../../components/Testimonials";
import { getCourseContent } from "../../utils/api";
import AboutCourse from "./AboutCourse";
import CourseHeader from "./CourseHeader";
import Curator from "./Curator";
import Discount from "./Discount";
import ForWhom from "./ForWhom";
import LearningProcess from "./LearningProcess";
import OtherCourses from "./OtherCourses";
import Register from "./Register";
import WhatWillULearn from "./WhatWillULearn";

const SingleCourse: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    getCourseContent(dispatch, +id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { content, loading, error } = useAppSelector((state) => state.content);

  if (!content) return null;

  const {
    content: {
      title = "Loading Failed",
      discount = 0,
      info = { date: "Loading Failed", duration: "Loading Failed", price: 0 },
      about = "Loading Failed",
      willLearn = [],
      curator = {
        name: "Loading Failed",
        job: "Loading Failed",
        rating: 0,
        coursesCount: 0,
        studentsCount: 0,
        text: "Loading Failed",
        socialMediaLinks: [],
      },
      steps = {
        first: { head: "Loading Failed", p: "Loading Failed" },
        second: { head: "Loading Failed", p: "Loading Failed" },
        third: { head: "Loading Failed", p: "Loading Failed" },
        fourth: { head: "Loading Failed", p: "Loading Failed" },
      },
      listForWhom = [],
      whatWillULearn = {
        lessons: [{ numberOfLesson: "SSS", head: "NOO", text: "OOO" }],
      },
    },
  } = content;

  if (loading)
    return (
      <div>
        <div className="bg-[#FEDBD3]">
          <Navbar />
        </div>
        <div className="w-full uppercase text-center">Loading...</div>
      </div>
    );

  if (error) {
    return (
      <div>
        <div className="bg-[#FEDBD3]">
          <Navbar />
        </div>
        <div className="w-full uppercase text-center text-[#FF3F3A]">
          Error!
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#FEDBD3]">
        <Navbar />
        <CourseHeader title={title} />
      </div>
      <AboutCourse data={{ info, about, willLearn }} />
      <Curator curator={curator} />
      <LearningProcess steps={steps} />
      <Discount discount={discount} />
      <ForWhom list={listForWhom} />
      <WhatWillULearn lessons={whatWillULearn.lessons} />
      <Testimonials />
      <Register discount={discount} />
      <OtherCourses />
      <Footer />
    </div>
  );
};

export default SingleCourse;
