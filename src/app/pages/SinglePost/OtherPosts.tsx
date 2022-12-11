import { FC, useEffect } from "react";
import OtherItem from "../../components/OtherItem";
import Post from "../../components/Post";
import { getPosts } from "../../utils/api";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const OtherPosts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getPosts(dispatch);
    // eslint-disable-next-line
  }, []);

  const { posts } = useAppSelector((state) => state.posts);

  return (
    <OtherItem
      data={{
        h3: "Our blog",
        h2: "You may also like",
        linkTo: "/blog",
        bottom: "Do you want more articles, podcasts and videos?",
        bottomInBtn: "Go to blog",
        slidesToShow: 3,
      }}
      slides={posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    />
  );
};

export default OtherPosts;
