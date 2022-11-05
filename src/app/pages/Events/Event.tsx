import React, { FC } from "react";
import UnFillButton from "../../components/Buttons/unFillButton";

const Event: FC = () => {
  return (
    <section className="max-w-[95%] py-6 mx-auto bg-white shadow-md rounded px-4 md:py-2 lg:px-10 lg:py-6 mb-6 hover:shadow-xl hover:scale-95 cursor-pointer active:scale-95">
      <div className="container text-left mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="date w-full md:w-auto flex justify-start md:justify-center items-center">
          <span className="mr-5 text-3xl lg:text-5xl text-[#FF3F3A]">05</span>
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
        <div className="w-full md:w-auto">
          <UnFillButton text="View more" />
        </div>
      </div>
    </section>
  );
};

export default Event;
