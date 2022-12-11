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
        image: "/images/eventsPage/image.png",
        who: "speaker",
        name: speaker.name,
        job: speaker.job,
      }}
      about={speaker.text}
    >
      <ul className="flex items-center gap-14 mt-10">
        <li>
          <img
            loading="lazy"
            src={
              process.env.PUBLIC_URL +
              "/images/homepage/certificate/strategy.png"
            }
            alt=""
          />
        </li>
        <li>
          <img
            loading="lazy"
            src={
              process.env.PUBLIC_URL +
              "/images/homepage/certificate/consulting.png"
            }
            alt=""
          />
        </li>
        <li>
          <img
            loading="lazy"
            src={
              process.env.PUBLIC_URL +
              "/images/homepage/certificate/national.png"
            }
            alt=""
          />
        </li>
      </ul>
    </Human>
  );
};

export default Speaker;
