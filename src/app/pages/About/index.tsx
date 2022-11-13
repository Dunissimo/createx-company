import React, { FC } from "react";
import Footer from "../../components/Footer";
import LatestPosts from "../../components/LatestPosts";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import Testimonials from "../../components/Testimonials";
import AboutTeam from "./AboutTeam";
import CoreValues from "./CoreValues";
import JobsForU from "./JobsForU";
import OnlineSchool from "./OnlineSchool";
import Process from "./Process";
import Statistics from "./Statistics";
import TeachingList from "./TeachingList";

const About: FC = () => {
  return (
    <div>
      <Navbar />
      <OnlineSchool />
      <Statistics />
      <CoreValues />
      <TeachingList />
      <Process />
      <AboutTeam />
      <Testimonials />
      <JobsForU />
      <LatestPosts count={3} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
