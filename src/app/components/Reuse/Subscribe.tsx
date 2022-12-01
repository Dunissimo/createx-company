import React, { FC } from "react";
import FillButton from "../Buttons/FillButton";
import Title from "../Title";

const Subscribe: FC = () => {
  return (
    <section className="bg-[#FEDBD4] text-center md:text-left py-32 relative overflow-y-hidden">
      <img
        className="hidden lg:block scale-75 absolute bottom-[-2rem] left-[-2rem]"
        src="./images/homepage/subscribe/subscribe.png"
        alt=""
      />
      <div className="container mx-auto">
        <div className="text-center mb-16 md:w-[75%] mx-auto">
          <Title
            text={{
              h3: "DON`T MISS ANYTHING",
              h2: "Subscribe to the Createx School announcements",
            }}
          />
        </div>
        <form
          action="post"
          className="w-1/2 mx-auto flex justify-center items-center mt-16 h-[50px]"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your working email"
            className="w-[220%] mr-6 h-full rounded min-w-[30%] px-4 outline-none focus:border focus:border-[#555454]"
          />
          <FillButton text="Subscribe" />
        </form>
      </div>
      <img
        className="scale-75 hidden lg:block absolute bottom-[-2rem] right-[-2rem]"
        src="./images/homepage/subscribe/subscribe.png"
        alt=""
      />
    </section>
  );
};

export default Subscribe;
