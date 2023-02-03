import React, { FC } from "react";
import Human from "../../components/SingleItem/Human";

interface IProps {
  speaker: {
    name: string;
    job: string;
    text: string;
  };
}

const Speaker: FC<IProps> = ({ speaker }) => {
  return (
    <Human
      human={{
        image: "eventsPage/image.png",
        who: "speaker",
        name: speaker.name,
        job: speaker.job,
      }}
      about={speaker.text}
    >
      <ul className="flex items-center gap-14 mt-10 opacity-50">
        <li>
          <img src={"../images/homepage/certificate/strategy.png"} alt="" />
        </li>
        <li>
          <img src={"../images/homepage/certificate/consulting.png"} alt="" />
        </li>
        <li>
          <img src={"../images/homepage/certificate/national.png"} alt="" />
        </li>
      </ul>
    </Human>
  );
};

export default Speaker;
