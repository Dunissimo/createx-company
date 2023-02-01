import React, { FC } from "react";
import UnFillButton from "./Buttons/UnFillButton";
import { IEvent } from "../utils/interfaces";
import { Link } from "react-router-dom";

interface IProps {
  event: IEvent;
  view: string;
}

const Event: FC<IProps> = ({ event, view }) => {
  const {
    date: { time, day, month },
    text: { title, p },
    id,
  } = event;

  const viewCond = view === "list";
  const gridStyles = {
    mainDiv: "flex flex-col justify-between",
    bodyDiv: "mb-4 min-h-[164px]",
    date: {
      mainDiv: "flex gap-6 mb-4",
      day: "text-[#FF3F3A] text-5xl",
      childDiv: "flex flex-col",
      month: "text-[#FF3F3A] text-xl",
    },
  };
  const flexStyles = {
    mainDiv:
      "flex flex-col text-center lg:flex-row lg:text-left items-center justify-between gap-4",
    bodyDiv:
      "flex flex-col text-center lg:flex-row lg:text-left items-center gap-8",
    date: {
      mainDiv: "flex lg:flex-row lg:text-left",
      day: "text-[#FF3F3A] text-5xl mr-4",
      childDiv: "flex flex-col text-center lg:text-left flex-col",
      month: "text-xl",
    },
  };

  return (
    <Link to={`/events/${id}`}>
      <section className="border bg-white border-gray-300 rounded shadow-md mb-4 px-6 py-6 hover:border-gray-400 hover:shadow-xl hover:scale-[1.01]">
        <div className={viewCond ? flexStyles.mainDiv : gridStyles.mainDiv}>
          <div className={viewCond ? flexStyles.bodyDiv : gridStyles.bodyDiv}>
            <div
              className={
                viewCond ? flexStyles.date.mainDiv : gridStyles.date.mainDiv
              }
            >
              <span
                className={
                  view === "list" ? flexStyles.date.day : gridStyles.date.day
                }
              >
                {day < 10 ? `0${day}` : day}
              </span>
              <div
                className={
                  viewCond ? flexStyles.date.childDiv : gridStyles.date.childDiv
                }
              >
                <span
                  className={
                    viewCond ? flexStyles.date.month : gridStyles.date.month
                  }
                >
                  {month}
                </span>
                <span className="opacity-50 whitespace-nowrap">{time}</span>
              </div>
            </div>
            <div>
              <h3>{title}</h3>
              <p className="opacity-50">{p}</p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <UnFillButton text="View more" />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Event;
