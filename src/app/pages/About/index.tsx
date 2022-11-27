import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import LatestPosts from "../../components/Reuse/LatestPosts";
import Navbar from "../../components/Reuse/Navbar";
import Subscribe from "../../components/Reuse/Subscribe";
import Testimonials from "../../components/Reuse/Testimonials";
import AboutTeam from "./AboutTeam";
import CoreValues from "./CoreValues";
import JobsForU from "./JobsForU";
import OnlineSchool from "./OnlineSchool";
import Process from "./Process";
import Statistics from "./Statistics";
import TeachingList from "./TeachingList";

const About: FC = () => {
  return (
    <>
      <Navbar />
      <OnlineSchool />
      <Statistics />
      <CoreValues />
      <TeachingList />
      <Process />
      <AboutTeam />
      <Testimonials />
      <JobsForU />
      <LatestPosts />
      <Subscribe />
      <Footer />
    </>
  );
};

export default About;
