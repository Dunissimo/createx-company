import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { setView } from "../../../redux/slices/eventsViewSlice";
import OtherItem from "../../components/OtherItem";
import { getEvents } from "../../utils/api";
import Event from "../../components/Event";

const OtherEvents: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setView("grid"));
    getEvents(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { events } = useAppSelector((state) => state.events);
  const { view } = useAppSelector((state) => state.view);

  return (
    <OtherItem
      data={{
        h3: "Check other online events",
        h2: "You may be interested in",
        linkTo: "/events",
        bottom: "Do you want more events?",
        bottomInBtn: "Explore all events",
        slidesToShow: 3,
      }}
      slides={events.map((event) => (
        <Event event={event} key={event.id} view={view} />
      ))}
    />
  );
};

export default OtherEvents;
