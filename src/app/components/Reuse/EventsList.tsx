import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { getEvents } from "../../utils/api";
import Event from "../Event";
import ErrorIndicator from "../Indicators/ErrorIndicator";
import LoadingIndicator from "../Indicators/LoadingIndicator";
import { useSearchParams } from "react-router-dom";

interface IProps {
  count?: number;
}

const EventsList: FC<IProps> = ({ count }) => {
  const [searchParams] = useSearchParams();

  const theme = searchParams.get("category") || "";
  const perPage = searchParams.get("perPage") || 9;
  const sorting = searchParams.get("sorting") || "newest";
  const query = searchParams.get("query") || "";

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

  const sortBy = (a: any, b: any, sorting: string) => {
    const firstDate = new Date(`${a.date.day} ${a.date.month}`);
    const secondDate = new Date(`${b.date.day} ${b.date.month}`);

    if (sorting === "newest") {
      if (firstDate > secondDate) return 1;
      if (firstDate < secondDate) return -1;
      if (firstDate === secondDate) return 0;
    }
    if (sorting === "oldest") {
      if (firstDate > secondDate) return -1;
      if (firstDate < secondDate) return 1;
      if (firstDate === secondDate) return 0;
    }

    return 0;
  };

  return (
    <div
      className={`${
        view === "list"
          ? "max-w-[90%] mx-auto"
          : "px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {events
        .slice(0, +perPage)
        // TODO: сделать пагинацию
        .filter((event) => {
          if (theme && theme !== "all") {
            return event.text.p.includes(theme);
          }

          return event;
        })
        .sort((a, b) => sortBy(a, b, sorting))
        .filter((item) => {
          return item.text.title.toLowerCase().includes(query.toLowerCase());
        })
        .map((event) => {
          if (count) {
            if (event.id > count) return null;
          }

          return <Event event={event} key={event.id} view={view} />;
        })}
    </div>
  );
};

export default EventsList;
