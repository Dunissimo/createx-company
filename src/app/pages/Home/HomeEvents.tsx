import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import EventsList from "../../components/Reuse/EventsList";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import Title from "../../components/Title";
import { useAppDispatch } from "../../../redux/hooks";
import { setView } from "../../../redux/slices/eventsViewSlice";

const HomeEvents: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setView("list"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ErrorBoundary>
      <section className="bg-[#FEDDD1] py-20">
        <Container>
          <div className="text-center mb-16">
            <Title
              text={{
                h3: "OUR EVENTS",
                h2: "Lectures & workshops",
              }}
            />
          </div>
          <ul className="events-list">
            <EventsList count={3} />
          </ul>
          <div className="row flex flex-col md:flex-row gap-4 md:gap-0 mt-16 items-center justify-center">
            <h3 className="text-3xl md:mr-10">Do you want more?</h3>
            <Link to="/events">
              <FillButton text="Explore all events" />
            </Link>
          </div>
        </Container>
      </section>
    </ErrorBoundary>
  );
};

export default HomeEvents;
