import React, { FC } from "react";
import Footer from "../../components/Footer";
import LatestPosts from "../../components/LatestPosts";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import Testimonials from "../../components/Testimonials";

const About: FC = () => {
  return (
    <div>
      <Navbar />
      {/* <OnlineSchool/> */}
      {/* <Statistics/> */}
      {/* <CoreValues/> */}
      {/* <Teaching/> */}
      {/* <Process/> */}
      {/* <AboutTeam/> */}
      <Testimonials />
      {/* <JobsForU/> */}
      <LatestPosts count={3} />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default About;
