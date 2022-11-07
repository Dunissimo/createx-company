import React, { FC, useEffect } from "react";
import {
  errorEvents,
  fetchEvents,
  loadEvents,
} from "../../../redux/slices/eventsSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { BASE_URL, get } from "../../utils/api";
import Event from "./Event";

const EventsList: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    get(`${BASE_URL}/events`, dispatch, {
      fetchAction: fetchEvents,
      loadAction: loadEvents,
      errorAction: errorEvents,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useAppSelector((state) => state.events);
  const { events, loading, error } = data;

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error!</h2>;

  return (
    <div>
      {events.map((event) => {
        if (event.id > 3) return null;
        return <Event event={event} key={event.id} />;
      })}
    </div>
  );
};

export default EventsList;
