import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import ItemHeader from "../../components/SingleItem/ItemHeader";
import Navbar from "../../components/Reuse/Navbar";
import AboutEvent from "./AboutEvent";
import Speaker from "./Speaker";

const SingleEvent: FC = () => {
  return (
    <div>
      <header className="bg-[#FEDBD3]">
        <Navbar />
        <ItemHeader type="Online Lecture" title="No data yet!!!" />
      </header>
      <AboutEvent />
      <Speaker />

      {/* <ForWhom /> */}
      {/* <Subscribe /> */}
      {/* <Request /> */}
      {/* <OtherEvents /> */}
      <Footer />
    </div>
  );
};

export default SingleEvent;
