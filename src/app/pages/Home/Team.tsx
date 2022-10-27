import React, { FC } from "react";
import TeamCard from "../../components/TeamCard";

const Team: FC = () => {
  return (
    <section className="bg-[#F4F5F7] py-32">
      <div className="container mx-auto">
        <div className="row flex items-end justify-between my-16">
          <div className="title">
            <h3 className="uppercase tracking-[1px]">
              Best tutors are all here
            </h3>
            <h2 className="font-black text-5xl mt-2">Meet our team</h2>
          </div>
          <div className="slider-controls">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
        <div className="team flex items-center justify-between">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </section>
  );
};

export default Team;
