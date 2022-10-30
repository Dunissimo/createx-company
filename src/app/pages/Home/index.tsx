import React, { FC } from "react";

import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import HomeCourses from "./HomeCourses";
import Benefits from "./Benefits";
import HomeEvents from "./HomeEvents";
import Certificate from "./Certificate";
import Team from "./Team";
import Testimonials from "./Testimonials";
import HomePosts from "./HomePosts";
import Subscribe from "./Subscribe";
import Footer from "../../components/Footer";

const Home: FC = () => {
  return (
    <section>
      <Header />
      <WhoWeAre />
      <HomeCourses />
      <Benefits />
      <HomeEvents />
      <Certificate />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <HomePosts /> */}
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
