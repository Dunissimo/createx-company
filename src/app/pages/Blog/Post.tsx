import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../utils/interfaces";

interface IProps {
  post: IPost;
}

const Post: FC<IProps> = ({ post }) => {
  const duration = post.details.duration ? (
    <span className="duration-details ml-6 relative before:content-[url(/public/images/homepage/blog/calendar-details.svg)] before:absolute before:top-[0.1rem] before:left-[-1.5rem]">
      {post.details.duration}
    </span>
  ) : (
    ""
  );

  // TODO Name it correctly
  const idkHowToNameIt = {
    podcast: {
      img: "mic-post.svg",
      button: "Listen",
    },
    video: {
      img: "play-post.svg",
      button: "Watch",
    },
    article: {
      img: "files-post.svg",
      button: "Read",
    },
  };

  return (
    <div className="flex flex-col">
      <div className="img w-full relative">
        <img
          className="w-full"
          src={`./images/homepage/blog/posts/${post.imgName}`}
          alt=""
        />
        <div className="before flex gap-2 bg-white rounded px-2 py-1 absolute top-2 left-2">
          <img
            src={`./images/homepage/blog/${
              idkHowToNameIt[post.type as keyof typeof idkHowToNameIt].img
            }`}
            alt="icon"
          />
          <p className="font-normal text-sm capitalize">{post.type}</p>
        </div>
      </div>
      <div className="details flex gap-4 items-center opacity-50 mt-4 mb-2">
        <span className="relative capitalize">{post.details.theme}</span>
        <div className="line w-[2px] h-[15px] bg-[#787A80]"></div>
        <span className="date-details ml-6 relative before:content-[url(/public/images/homepage/blog/calendar-details.svg)] before:absolute before:top-[0.1rem] before:left-[-1.5rem]">
          {post.details.date}
        </span>
        <div className="line w-[2px] h-[15px] bg-[#787A80]"></div>
        {duration}
      </div>
      <div className="text w-full">
        <h2 className="text-xl">{post.title}</h2>
        <p className="text-[#424551] mt-2 mb-4">{post.p}</p>
      </div>
      <Link
        to="/post/id"
        className="post-link self-start hover:scale-95 hover:underline after:content-[url(/public/images/homepage/blog/line.svg)] after:ml-4"
      >
        {idkHowToNameIt[post.type as keyof typeof idkHowToNameIt].button}
      </Link>
    </div>
  );
};

export default Post;
