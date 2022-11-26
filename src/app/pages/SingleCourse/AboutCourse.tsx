import React, { FC } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";

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
    <div className="flex lg:justify-end">
      <div className="lg:w-2/3 blocks px-8 py-10 shadow-regular border-2 border-[#E5E8ED]">
        <div className="block mb-8">
          <h4 className="uppercase">Dates</h4>
          <p className="text-2xl text-[#FF3F3A] mt-1 mb-2">{info.date}</p>
          <p className="opacity-50">
            Metus turpis sit lorem lacus, in elit tellus lacus.
          </p>
        </div>
        <div className="block mb-8">
          <h4 className="uppercase">Duration</h4>
          <p className="text-2xl text-[#FF3F3A] mt-1 mb-2">{info.duration}</p>
          <p className="opacity-50">
            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
          </p>
        </div>
        <div className="block mb-8">
          <h4 className="uppercase">Price</h4>
          <p className="text-2xl text-[#FF3F3A] mt-1 mb-2">
            ${info.price} per month
          </p>
          <p className="opacity-50">
            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
            quam ac elit tristique dis.
          </p>
        </div>
        <Link to="/">
          <button className="w-full py-3 rounded-lg bg-gradient-to-l from-[#ff3f3a] to-[#f75e05] text-white hover:drop-shadow-xl hover:scale-95">
            Join the course
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="py-20">
      <Container>
        <Row left={left} right={right} />
      </Container>
    </div>
  );
};

export default AboutCourse;
