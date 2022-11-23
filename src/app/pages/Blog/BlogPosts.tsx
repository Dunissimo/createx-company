import React, { FC } from "react";
import PostsList from "../../components/PostsList";

const BlogPosts: FC = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="posts-list px-4 xl:px-0 md:w-2/3 mx-auto lg:w-full">
        <PostsList />
      </div>
    </div>
  );
};

export default BlogPosts;
