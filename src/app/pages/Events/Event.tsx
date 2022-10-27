import React, { FC } from "react";
import UnFillButton from "../../components/Buttons/unFillButton";
import Navbar from "../../components/Navbar";

const Event: FC = () => {
  return (
    <section className="max-w-[90%] mx-auto bg-white shadow-md rounded px-10 py-6 mb-6 hover:shadow-xl cursor-pointer active:scale-95">
      <div className="container mx-auto flex items-center justify-between">
        <div className="date flex items-center">
          <span className="mr-5 text-5xl text-[#FF3F3A]">05</span>
          <div className="flex flex-col">
            <span>August</span>
            <span className="font-normal text-[#787A80]">11:00 – 14:00</span>
          </div>
        </div>
        <div className="title">
          <h3>
            Formation of the organizational structure of the company in the face
            of uncertainty.
          </h3>
          <p className="font-normal text-[#787A80]">Onine master-class</p>
        </div>
        <UnFillButton text="View more" />
      </div>
    </section>
  );
};

export default Event;
