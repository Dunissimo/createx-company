import React, { FC } from "react";

const Post: FC = () => {
  return (
    <div className="flex flex-col w-1/3">
      <div className="img w-full relative">
        <img className="w-full" src="./images/homepage/blog/image.png" alt="" />
        <div className="before flex gap-2 bg-white rounded px-2 py-1 absolute top-2 left-2">
          <img src="./images/homepage/header/Person.png" alt="icon" />
          <p className="font-normal text-sm">Podcast</p>
        </div>
      </div>
      <div className="details flex gap-4 items-center opacity-50 mt-4 mb-2">
        <span className="relative">Marketing</span>
        <div className="line w-[2px] h-[15px] bg-[#787A80]"></div>
        <span className="relative">September 4, 2020</span>
        <div className="line w-[2px] h-[15px] bg-[#787A80]"></div>
        <span className="relative">36 min</span>
      </div>
      <div className="text w-full">
        <h2 className="text-xl">
          What is traffic arbitrage and does it really make money?
        </h2>
        <p className="text-[#424551] mt-2 mb-4">
          Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis
          proin dignissim lacus, purus gravida...
        </p>
      </div>
      <button className="self-start">Listen</button>
    </div>
  );
};

export default Post;
