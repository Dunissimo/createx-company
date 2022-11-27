import React, { FC } from "react";
import { Link } from "react-router-dom";
import { types } from "../../components/Course";

interface IProps {
  type: string;
  imgName: string;
}

const TeachingItem: FC<IProps> = ({ type, imgName }) => {
  return (
    <div className="teaching-item shadow-md mt-8 md:mt-0 border border-gray-300 rounded">
      <img
        src={`./images/aboutPage/teach/${imgName}`}
        className="w-full"
        alt=""
      />
      <div className="py-4 px-6 mt-6">
        <div
          className={`mt-6 inline px-2 py-1 text-white rounded ${
            types[type as keyof typeof types]
          }`}
        >
          {type}
        </div>
        <p className="opacity-50 my-5">
          Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu
          viverra faucibus. Viverra scelerisque consequat.
        </p>
        <Link
          to="/courses"
          className="hover:text-[#FF3F3A] after:content-[url(/public/images/homepage/blog/line.svg)] after:ml-4"
        >
          Check courses
        </Link>
      </div>
    </div>
  );
};

export default TeachingItem;
