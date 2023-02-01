import { FC } from "react";
import Container from "../../components/Container";
import EventsList from "../../components/Reuse/EventsList";
import Footer from "../../components/Reuse/Footer";
import Navbar from "../../components/Reuse/Navbar";
import Subscribe from "../../components/Reuse/Subscribe";
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
      <div className="mb-20">
        <EventsList />
      </div>
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Events;
