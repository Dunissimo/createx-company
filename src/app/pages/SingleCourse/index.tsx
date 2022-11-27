import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import Footer from "../../components/Reuse/Footer";
import ErrorIndicator from "../../components/Indicators/ErrorIndicator";
import LoadingIndicator from "../../components/Indicators/LoadingIndicator";
import ItemHeader from "../../components/SingleItem/ItemHeader";
import Navbar from "../../components/Reuse/Navbar";
import Testimonials from "../../components/Reuse/Testimonials";
import { getCourseContent } from "../../utils/api";
import AboutCourse from "./AboutCourse";
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

  const {
    title,
    about,
    discount,
    info,
    willLearn,
    curator,
    steps,
    listForWhom,
    whatWillULearn,
  } = useAppSelector((state) => state.course.content.data);
  const { error, loading } = useAppSelector((state) => state.course);

  if (loading)
    return (
      <>
        <Navbar />
        <LoadingIndicator />
      </>
    );

  if (error) {
    return (
      <div className="bg-[#bd1414]">
        <div className="bg-[#FEDBD3]">
          <Navbar />
        </div>
        <ErrorIndicator />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-[#FEDBD3]">
        <Navbar />
        <ItemHeader type="Course" title={title} />
      </div>
      <AboutCourse data={{ about, info, willLearn }} />
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
