import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Post from "../Post";
import { getPosts } from "../../utils/api";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import ErrorIndicator from "../Indicators/ErrorIndicator";

interface IProps {
  count?: number;
}

const PostsList: FC<IProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPosts(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { posts, loading, error } = useAppSelector((state) => state.posts);

  if (loading)
    return (
      <div className="w-full">
        <LoadingIndicator />
      </div>
    );

  if (error)
    return (
      <div className="w-full">
        <ErrorIndicator />
      </div>
    );

  return (
    <>
      {posts.map((post) => {
        if (count) {
          if (post.id > count) return null;
        }
        return (
          <div key={post.id} className={`div${post.id} mb-8 lg:mb-0`}>
            <Post post={post} />
          </div>
        );
      })}
    </>
  );
};

export default PostsList;
