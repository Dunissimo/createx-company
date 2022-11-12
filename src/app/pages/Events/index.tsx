import React, { FC } from "react";
import EventsList from "../../components/EventsList";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import Title from "../../components/Title";
import OptionsPanel from "./OptionsPanel";

const Events: FC = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto text-center pt-16 pb-28">
        <Title
          text={{
            h3: "Our events",
            h2: "Lectures, workshops & master-classes",
          }}
        />
      </div>
      <OptionsPanel />
      <EventsList />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Events;
