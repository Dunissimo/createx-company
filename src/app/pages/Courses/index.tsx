import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import Navbar from "../../components/Reuse/Navbar";
import Certificate from "../../components/Reuse/Certificate";
import Subscribe from "../../components/Reuse/Subscribe";
import Testimonials from "../../components/Reuse/Testimonials";
import Title from "../../components/Title";
import FilterPanel from "./FilterPanel";
import Container from "../../components/Container";
import CoursesList from "../../components/Reuse/CoursesList";

const Courses: FC = () => {
  return (
    <section>
      <Navbar />
      <Container>
        <div className="text-center">
          <Title
            text={{ h2: "Our online courses", h3: "Enjoy your studying!" }}
          />
        </div>
      </Container>
      <FilterPanel />
      <CoursesList gridStyles="grid-rows-3 grid-cols-3" isFlex={false} />
      <Testimonials />
      <Certificate />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Courses;
