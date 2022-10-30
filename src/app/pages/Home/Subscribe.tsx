import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";

const Subscribe: FC = () => {
  return (
    <section className="bg-[#FEDBD4] py-32 relative overflow-y-hidden">
      <img
        className="scale-75 absolute bottom-[-2rem] left-[-2rem]"
        src="./images/homepage/subscribe/subscribe.png"
        alt=""
      />
      <div className="container mx-auto">
        <div className="title text-center">
          <h3 className="uppercase tracking-[1px]">Don`t miss anything</h3>
          <h4 className="text-4xl mt-2 font-black">
            Subscribe to the Createx School <br /> announcements
          </h4>
        </div>
        <form
          action="post"
          className="flex justify-center items-center mt-16 h-[50px]"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your working email"
            className="mr-6 h-full rounded min-w-[30%] px-4 outline-none focus:border focus:border-[#555454]"
          />
          <button type="submit">
            <FillButton text="Subscribe" />
          </button>
        </form>
      </div>
      <img
        className="scale-75 absolute bottom-[-2rem] right-[-2rem]"
        src="./images/homepage/subscribe/subscribe.png"
        alt=""
      />
    </section>
  );
};

export default Subscribe;
