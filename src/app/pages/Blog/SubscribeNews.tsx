import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";

const SubscribeNews: FC = () => {
  return (
    <div className="bg-[#F4F5F6] px-4 lg:px-0">
      <div className="container mx-auto py-20 flex flex-col md:flex-row items-center">
        <div className="left md:w-1/2 mb-8 md:mb-0">
          <img src="/images/blogPage/illustration.png" alt="" />
        </div>
        <div className="right md:w-1/2">
          <h2 className="text-2xl font-black">
            Want to get the best articles weekly? <br /> Subscribe to our
            newsletter!
          </h2>
          <form action="post">
            <input
              type="email"
              placeholder="Your working email"
              className="mr-4 w-[50%] mt-12 mb-6 bg-white transition-none rounded px-4 py-3 outline-none focus:border focus:border-[#979797]"
            />
            <FillButton text="Subscribe" />
          </form>
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree" className="ml-4 opacity-50">
            I agree to receive communications from Createx Online School
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
