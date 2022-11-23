import React, { FC } from "react";
import FillButton from "./Buttons/FillButton";
import Title from "./Title";
import { Link } from "react-router-dom";
import PostsList from "./PostsList";

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
          <Link to="./blog" className="btn mt-6 lg:mt-0">
            <FillButton text="Go to blog" />
          </Link>
        </div>
        <div className="posts mx-4 flex flex-col lg:flex-row gap-8 mt-16">
          <PostsList count={3} />
        </div>
      </div>
    </section>
  );
};

export default HomePosts;
