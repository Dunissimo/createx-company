import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  errorPosts,
  fetchPosts,
  loadPosts,
} from "../../redux/slices/postsSlice";
import FillButton from "./Buttons/FillButton";
import Title from "./Title";
import { BASE_URL, get } from "../utils/api";
import Post from "../pages/Blog/Post";

interface IProps {
  count?: number;
}

const HomePosts: FC<IProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    get(`${BASE_URL}/posts`, dispatch, {
      fetchAction: fetchPosts,
      loadAction: loadPosts,
      errorAction: errorPosts,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useAppSelector((state) => state.posts);
  const { posts, loading, error } = data;

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

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
          {posts.map((post) => {
            if (count) {
              if (post.id > count) return null;
            }
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePosts;
