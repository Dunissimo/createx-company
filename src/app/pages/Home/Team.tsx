import React, { FC } from "react";
import CircleButton from "../../components/Buttons/CircleButton";
import TeamCard from "../../components/TeamCard";
import Title from "../../components/Title";

const Team: FC = () => {
  return (
    <section className="bg-[#F4F5F7] py-32">
      <div className="container mx-auto">
        <div className="row flex items-end justify-between my-16">
          <Title
            text={{
              h3: "BEST TUTORS ARE ALL HERE",
              h2: "Meet our team",
            }}
          />
          <div className="slider-controls flex">
            <CircleButton />
            <CircleButton isRotate />
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
