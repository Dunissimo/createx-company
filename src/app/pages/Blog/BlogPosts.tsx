import React, { FC } from "react";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import PostsList from "../../components/Reuse/PostsList";

const BlogPosts: FC = () => {
  return (
    <ErrorBoundary>
      <div className="py-20">
        <Container>
          <div className="posts-list px-4 xl:px-0 md:w-2/3 mx-auto lg:w-full">
            <PostsList />
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default BlogPosts;
