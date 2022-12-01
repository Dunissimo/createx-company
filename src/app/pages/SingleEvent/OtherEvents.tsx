import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setView } from "../../../redux/slices/eventsViewSlice";
import CircleButton from "../../components/Buttons/CircleButton";
import FillButton from "../../components/Buttons/FillButton";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/Indicators/ErrorBoundary";
import EventsList from "../../components/Reuse/EventsList";
import Title from "../../components/Title";

const OtherEvents: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setView("grid"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ErrorBoundary>
      <div className="container px-4 mx-auto py-20">
        <Container>
          <div className="flex justify-between">
            <Title
              text={{
                h3: "Check other online events",
                h2: "You may be interested in",
              }}
            />
            <div className="slider-controls items-end flex">
              <CircleButton />
              <CircleButton isRotate />
            </div>
          </div>
          <div className="py-20">
            <EventsList count={3} />
          </div>
          {/* TODO: сделать слайдер, убрать count */}
          <div className="flex items-center justify-center">
            <h3 className="text-2xl mr-8">Do you want more?</h3>
            <Link to="/courses">
              <FillButton text="Explore all events" />
            </Link>
          </div>
        </Container>
      </div>
    </ErrorBoundary>
  );
};

export default OtherEvents;
