import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Post from "../Blog/Post";

const HomePosts: FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="row flex justify-between items-end">
          <div className="title">
            <h3 className="uppercase tracking-[1px]">Our blog</h3>
            <h4 className="mt-2 text-4xl font-black">Latest posts</h4>
          </div>
          <div className="btn">
            <FillButton text="Go to blog" />
          </div>
        </div>
        <div className="posts flex gap-8 mt-16">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
};

export default HomePosts;
