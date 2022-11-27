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
  return (
    <Link to={`/events/${id}`}>
      <section className="border border-gray-300 py-6 mx-auto px-4 md:py-2 lg:px-10 lg:py-6 mb-6 max-w-[85%] bg-white shadow-md rounded hover:shadow-xl hover:scale-95 cursor-pointer active:scale-95">
        <div
          className={`container text-left mx-auto flex flex-col gap-6 ${
            viewCond
              ? "md:flex-row items-center justify-between"
              : "justify-start items-start text-left"
          } `}
        >
          <div
            className={`flex gap-4 flex-col  ${
              viewCond
                ? "w-2/3 text-center md:text-left md:flex-row md:gap-16"
                : "w-full text-left"
            }  items-center`}
          >
            <div
              className={`date text-base xl:text-xl flex justify-start ${
                viewCond ? "w-1/3 md:justify-center" : "w-full flex-col"
              } items-center`}
            >
              <span
                className={`${
                  viewCond ? "mr-5" : "w-full"
                } text-3xl lg:text-5xl text-[#FF3F3A]`}
              >
                {day < 10 ? `0${day}` : day}
              </span>
              <div className="w-full flex flex-col">
                <span className={`${viewCond ? "" : " text-[#FF3F3A]"}`}>
                  {month}
                </span>
                <span className="font-normal text-[#787A80]">{time}</span>
              </div>
            </div>
            <div className={`title ${viewCond ? "w-2/3" : "w-full"}`}>
              <h3>{title}</h3>
              <p className="font-normal text-[#787A80]">{p}</p>
            </div>
          </div>
          <div
            className={`flex ${
              viewCond ? "w-1/3  justify-end" : "w-full justify-start"
            } `}
          >
            <UnFillButton text="View more" />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Event;
