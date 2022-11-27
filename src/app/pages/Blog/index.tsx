import React, { FC } from "react";
import Footer from "../../components/Reuse/Footer";
import Navbar from "../../components/Reuse/Navbar";
import Title from "../../components/Title";
import FilterPanel from "./FilterPanel";
import BlogPosts from "./BlogPosts";
import SubscribeNews from "./SubscribeNews";
import Container from "../../components/Container";

const Blog: FC = () => {
  return (
    <section>
      <Navbar />
      <Container>
        <div className="text-center">
          <Title text={{ h3: "Our blog", h2: "Createx School Journal" }} />
        </div>
      </Container>
      <FilterPanel />
      <BlogPosts />
      <SubscribeNews />
      <Footer />
    </section>
  );
};

export default Blog;
