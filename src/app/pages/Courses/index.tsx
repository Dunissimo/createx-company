import React, { FC } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Certificate from "../../components/Certificate";
import Subscribe from "../../components/Subscribe";
import Testimonials from "../../components/Testimonials";
import Title from "../../components/Title";
import FilterPanel from "./FilterPanel";
import CoursesList from "../../components/CoursesList";

const Courses: FC = () => {
  return (
    <section>
      <Navbar />
      <div className="pt-16 pb-28 text-center">
        <Title
          text={{ h2: "Our online courses", h3: "Enjoy your studying!" }}
        />
      </div>
      <FilterPanel />
      <CoursesList
        count={9}
        gridStyles="grid-rows-3 grid-cols-3"
        isFlex={false}
      />
      <Testimonials />
      <Certificate />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Courses;
