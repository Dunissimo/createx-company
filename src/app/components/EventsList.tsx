import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchEvents,
  loadEvents,
  errorEvents,
} from "../../redux/slices/eventsSlice";
import { get, BASE_URL } from "../utils/api";
import Event from "./Event";

interface IProps {
  count?: number;
}

const EventsList: FC<IProps> = ({ count }) => {
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
    <div className="pb-20">
      {events.map((event) => {
        if (count) {
          if (event.id > count) return null;
        }

        return <Event event={event} key={event.id} />;
      })}
    </div>
  );
};

export default EventsList;
