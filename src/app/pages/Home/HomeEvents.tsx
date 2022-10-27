import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";

import Event from "../Events/Event";

const Events: FC = () => {
  return (
    <section className="events bg-[#FEDDD1] py-20">
      <div className="container mx-auto">
        <div className="title text-center">
          <h3 className="uppercase">Our Events</h3>
          <h2 className="text-5xl mt-4 font-black mb-14">
            Lectures & workshops
          </h2>
        </div>
        <ul className="events-list">
          <Event />
          <Event />
          <Event />
        </ul>
        <div className="row flex mt-16 items-center justify-center">
          <h3 className="text-3xl mr-10">Do you want more?</h3>
          <FillButton text="Explore all events" />
        </div>
      </div>
    </section>
  );
};

export default Events;
