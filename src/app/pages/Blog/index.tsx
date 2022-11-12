import React, { FC } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

const Blog: FC = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto text-center pt-16 pb-28">
        <Title text={{ h3: "Our blog", h2: "Createx School Journal" }} />
      </div>
      {/* <FilterPanel/> */}
      {/* <PostsList/> */}
      {/* <SubscribeNews/> */}
      <Footer />
    </section>
  );
};

export default Blog;
