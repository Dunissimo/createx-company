import React, { FC } from "react";
import UnFillButton from "./Buttons/unFillButton";
import { IEvent } from "../utils/interfaces";

interface IProps {
  event: IEvent;
}

const Event: FC<IProps> = ({ event }) => {
  const {
    date: { time, day, month },
    text: { title, p },
  } = event;
  return (
    <section className="max-w-[95%] py-6 mx-auto bg-white shadow-md rounded px-4 md:py-2 lg:px-10 lg:py-6 mb-6 hover:shadow-xl hover:scale-95 cursor-pointer active:scale-95">
      <div className="container text-left mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="flex gap-4 flex-col text-center md:text-left md:flex-row md:gap-16 items-center">
          <div className="date text-base xl:text-xl flex justify-start md:justify-center items-center">
            <span className="mr-5 text-3xl lg:text-5xl text-[#FF3F3A]">
              {day < 10 ? `0${day}` : day}
            </span>
            <div className="flex flex-col">
              <span>{month}</span>
              <span className="font-normal text-[#787A80]">{time}</span>
            </div>
          </div>
          <div className="title">
            <h3>{title}</h3>
            <p className="font-normal text-[#787A80]">{p}</p>
          </div>
        </div>
        <UnFillButton text="View more" />
      </div>
    </section>
  );
};

export default Event;
