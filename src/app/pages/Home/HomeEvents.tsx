import React, { FC } from "react";
import FillButton from "../../components/Buttons/FillButton";
import Title from "../../components/Title";

import Event from "../Events/Event";

const Events: FC = () => {
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
