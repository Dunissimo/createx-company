import React, { FC } from "react";
import { Link } from "react-router-dom";
import CircleButton from "../../components/Buttons/CircleButton";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import PostsList from "../../components/Reuse/PostsList";
import Title from "../../components/Title";

const OtherPosts: FC = () => {
  return (
    <ErrorBoundary>
      <div className="container px-4 mx-auto py-20">
        <Container>
          <div className="flex justify-between">
            <Title
              text={{
                h3: "Our blog",
                h2: "You may also like",
              }}
            />
            <div className="slider-controls items-end flex">
              <CircleButton />
              <CircleButton isRotate />
            </div>
          </div>
          <div className="py-20 flex items-center gap-4">
            <PostsList count={3} />
          </div>
          {/* TODO: сделать слайдер, убрать count */}
          <div className="flex items-center justify-center">
            <h3 className="text-2xl mr-8">
              Do you want more articles, podcasts and videos?
            </h3>
            <Link to="/courses">
              <FillButton text="Go to blog" />
            </Link>
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default OtherPosts;
