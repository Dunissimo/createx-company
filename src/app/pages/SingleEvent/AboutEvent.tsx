import React, { FC } from "react";
import { Link } from "react-router-dom";
import AboutItem from "../../components/SingleItem/AboutItem";
import Join from "../../components/SingleItem/Join";
import JoinBlock from "../../components/SingleItem/JoinBlock";

const AboutEvent: FC = () => {
  const left = <h2 className="font-black text-5xl">We will talk about:</h2>;

  const right = (
    <Join type="event">
      <JoinBlock
        top={"Time"}
        middle={""}
        bottom={"Metus turpis sit lorem lacus, in elit tellus lacus."}
      />
      <JoinBlock
        top={"Price"}
        middle={""}
        bottom={
          "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis."
        }
      />
      <Link
        to="/"
        className="text-[#FF3F3A] uppercase underline mb-10 hover:no-underline"
      >
        Event on Facebook
      </Link>
    </Join>
  );

  return <AboutItem left={left} right={right} />;
};

export default AboutEvent;
