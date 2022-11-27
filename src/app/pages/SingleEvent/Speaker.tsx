import React, { FC } from "react";
import Human from "../../components/SingleItem/Human";

const Speaker: FC = () => {
  return (
    <Human human={{ image: "", who: "", name: "", job: "" }} about="">
      <ul className="flex items-center gap-14 mt-10">
        <li>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/homepage/certificate/strategy.png"
            }
            alt=""
          />
        </li>
        <li>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/homepage/certificate/consulting.png"
            }
            alt=""
          />
        </li>
        <li>
          <img
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
