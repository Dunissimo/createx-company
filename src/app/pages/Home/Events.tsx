import React, { FC } from "react";

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
        <ul className="events-list"></ul>
      </div>
    </section>
  );
};

export default Events;
