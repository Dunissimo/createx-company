import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";
import Post from "../Blog/Post";

const HomePosts: FC = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="row flex flex-col lg:flex-row items-center text-center lg:text-left justify-between lg:items-end">
          <Title
            text={{
              h3: "Our blog",
              h2: "Latest posts",
            }}
          />
          <div className="btn mt-6 lg:mt-0">
            <FillButton text="Go to blog" />
          </div>
        </div>
        <div className="posts mx-4 flex flex-col lg:flex-row gap-8 mt-16">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </section>
  );
};

export default HomePosts;
