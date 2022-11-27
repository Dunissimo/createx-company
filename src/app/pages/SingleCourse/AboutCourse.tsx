import React, { FC } from "react";
import AboutItem from "../../components/SingleItem/AboutItem";
import Join from "../../components/SingleItem/Join";
import JoinBlock from "../../components/SingleItem/JoinBlock";

interface IProps {
  data: {
    info: {
      date: string;
      duration: string;
      price: number;
    };
    about: string;
    willLearn: string[];
  };
}

const AboutCourse: FC<IProps> = ({ data }) => {
  const { info, about, willLearn } = data;

  const left = (
    <>
      <h2 className="text-5xl font-black">About the course</h2>
      <p className="py-10 opacity-50">{about}</p>
      <h3 className="text-3xl pb-6">You will learn:</h3>
      <ul className="aboutCourse-list">
        {willLearn.map((li, i) => (
          <li key={i} className="ml-5 text-gray-600">
            {li}
          </li>
        ))}
      </ul>
    </>
  );

  const right = (
    <>
      <Join type="course">
        <JoinBlock
          top={"Dates"}
          middle={info.date}
          bottom={"Metus turpis sit lorem lacus, in elit tellus lacus."}
        />
        <JoinBlock
          top={"Duration"}
          middle={info.duration}
          bottom={
            "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut."
          }
        />
        <JoinBlock
          top={"Price"}
          middle={`$${info.price} per month`}
          bottom={
            "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis."
          }
        />
      </Join>
    </>
  );

  return <AboutItem left={left} right={right} />;
};

export default AboutCourse;
