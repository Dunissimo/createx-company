import React, { FC } from "react";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import AboutItem from "../../components/SingleItem/AboutItem";
import Join from "../../components/SingleItem/Join";
import JoinBlock from "../../components/SingleItem/JoinBlock";
import { ITheme } from "../../utils/interfaces";

interface IProps {
  themes: ITheme[];
  info: {
    date: string;
    price: string | number;
  };
}

const AboutEvent: FC<IProps> = ({ info, themes }) => {
  const left = (
    <>
      <h2 className="font-black text-5xl">We will talk about:</h2>
      <div className="thems mt-12">
        {themes.map((theme) => (
          <Accordion item={theme} />
        ))}
      </div>
    </>
  );

  const right = (
    <Join type="event">
      <JoinBlock
        top={"Time"}
        middle={info.date}
        bottom={"Metus turpis sit lorem lacus, in elit tellus lacus."}
      />
      <JoinBlock
        top={"Price"}
        middle={info.price}
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
