import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";

import EventsList from "../Events/EventsList";

const HomeEvents: FC = () => {
  return (
    <section className="events bg-[#FEDDD1] py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Title
            text={{
              h3: "OUR EVENTS",
              h2: "Lectures & workshops",
            }}
          />
        </div>
        <ul className="events-list">
          <EventsList />
        </ul>
        <div className="row flex flex-col md:flex-row gap-4 md:gap-0 mt-16 items-center justify-center">
          <h3 className="text-3xl md:mr-10">Do you want more?</h3>
          <FillButton text="Explore all events" />
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
