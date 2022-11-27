import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getEvents } from "../../utils/api";
import Event from "../Event";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";

interface IProps {
  count?: number;
}

const EventsList: FC<IProps> = ({ count }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getEvents(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { view } = useAppSelector((state) => state.view);
  const data = useAppSelector((state) => state.events);
  const { events, loading, error } = data;

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator />;

  return (
    <div
      className={`pb-20 ${
        view === "list" ? "" : "grid grid-rows-3 grid-cols-3"
      }`}
    >
      {events.map((event) => {
        if (count) {
          if (event.id > count) return null;
        }

        return <Event event={event} key={event.id} view={view} />;
      })}
    </div>
  );
};

export default EventsList;
