import React, { FC } from "react";

import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import HomeCourses from "./HomeCourses";
import Benefits from "./Benefits";
import HomeEvents from "./HomeEvents";
import Certificate from "../../components/Certificate";
import HomeTeam from "./HomeTeam";
import Testimonials from "../../components/Testimonials";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import LatestPosts from "../../components/LatestPosts";

const Home: FC = () => {
  return (
    <section>
      <Header />
      <WhoWeAre />
      <HomeCourses />
      <Benefits />
      <HomeEvents />
      <Certificate />
      {/* TODO сделать адаптивный слайдер */}
      <HomeTeam />
      {/* TODO тоже сделать адаптивный слайдер */}
      <Testimonials />
      <LatestPosts count={3} />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
