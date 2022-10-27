import React, { FC } from "react";

import Header from "./Header";
import WhoWeAre from "./WhoWeAre";
import HomeCourses from "./HomeCourses";
import Benefits from "./Benefits";
import Events from "./HomeEvents";
import Certificate from "./Certificate";
import Team from "./Team";

const Home: FC = () => {
  return (
    <section>
      <Header />
      <WhoWeAre />
      <HomeCourses />
      <Benefits />
      <Events />
      <Certificate />
      <Team />
    </section>
  );
};

export default Home;
