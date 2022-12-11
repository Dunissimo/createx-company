import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

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
import LearningProcess from "./LearningProcess";
import OtherCourses from "./OtherCourses";
import WhatWillULearn from "./WhatWillULearn";
import ForWhom from "../../components/SingleItem/ForWhom";
import Registration from "./Registration";

const SingleCourse: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    getCourseContent(dispatch, +id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { error, loading, content } = useAppSelector((state) => state.course);
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
  } = content.data;

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
      <ForWhom list={listForWhom} type="course" />
      <WhatWillULearn lessons={whatWillULearn.lessons} />
      <Testimonials />
      <Registration discount={discount} />
      <OtherCourses />
      <Footer />
    </div>
  );
};

export default SingleCourse;
