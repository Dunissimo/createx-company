import React, { FC } from "react";
import FillButton from "./Buttons/FillButton";
import Title from "./Title";
import { Link } from "react-router-dom";
import PostsList from "./PostsList";
import Container from "./Container";

const LatestPosts: FC = () => {
  return (
    <div className="py-20">
      <Container>
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
      </Container>
    </div>
  );
};

export default LatestPosts;
