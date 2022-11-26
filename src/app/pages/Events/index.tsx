import React, { FC } from "react";
import Container from "../../components/Container";
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
      <Container>
        <div className="text-center">
          <Title
            text={{
              h3: "Our events",
              h2: "Lectures, workshops & master-classes",
            }}
          />
        </div>
      </Container>
      <OptionsPanel />
      <EventsList />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Events;
