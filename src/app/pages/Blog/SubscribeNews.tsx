import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import Row from "../../components/Row";

const SubscribeNews: FC = () => {
  const left = (
    <div className="mb-8 md:mb-0">
      <img loading="lazy" src="/images/blogPage/illustration.png" alt="" />
    </div>
  );

  const right = (
    <>
      <h2 className="text-2xl font-black">
        Want to get the best articles weekly? <br /> Subscribe to our
        newsletter!
      </h2>
      <form action="post" className="flex items-center mt-12 mb-6">
        <input
          type="email"
          placeholder="Your working email"
          className="mr-4 w-[80%] bg-white transition-none rounded px-4 py-3 outline-none focus:border focus:border-[#979797]"
        />
        <div className="w-1/2">
          <FillButton text="Subscribe" />
        </div>
      </form>
      <input type="checkbox" name="agree" id="agree" />
      <label htmlFor="agree" className="ml-4 opacity-50">
        I agree to receive communications from Createx Online School
      </label>
    </>
  );

  return (
    <div className="py-20 bg-[#F4F5F6] px-4 lg:px-0">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default SubscribeNews;
