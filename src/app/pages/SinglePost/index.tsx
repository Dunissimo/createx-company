import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import Navbar from "../../components/Reuse/Navbar";
import SubscribeNews from "../Blog/SubscribeNews";
import OtherPosts from "./OtherPosts";

const SinglePost: FC = () => {
  return (
    <div>
      <Navbar />
      {/* <Content left={<Main/>} right={<Sidebar/>}/> */}
      <SubscribeNews />
      <OtherPosts />
      <Footer />
    </div>
  );
};

export default SinglePost;
