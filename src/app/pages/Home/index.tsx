import React, { FC } from "react";

import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import HomeCourses from "./HomeCourses";
import Benefits from "./Benefits";
import HomeEvents from "./HomeEvents";
import Certificate from "../../components/Reuse/Certificate";
import HomeTeam from "./HomeTeam";
import Testimonials from "../../components/Reuse/Testimonials";
import Subscribe from "../../components/Reuse/Subscribe";
import Footer from "../../components/Reuse/Footer";
import LatestPosts from "../../components/Reuse/LatestPosts";

const Home: FC = () => {
  return (
    <section>
      <Header />
      <WhoWeAre />
      <HomeCourses />
      <Benefits />
      <HomeEvents />
      <Certificate />
      <HomeTeam count={4} />
      <Testimonials />
      <LatestPosts />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
